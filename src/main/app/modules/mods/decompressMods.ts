import path from 'path';
import fs from 'node:fs';
import { MODSDIR } from '../../config/paths';
import { decompressZip } from '../decompress/zip';
import { extractRarArchive } from '../decompress/unrar';
import { Mod, ModStatus } from '../../entities/Mod';
import { ModRepository } from './modRepository';

export async function decompressZipMod(zipPath: string) {
    let outputDir = createDefaultModDir(zipPath);
    await decompressZip(zipPath, outputDir);
    addMod(zipPath, outputDir);
}

export async function decompressRarMod(zipPath: string) {
    let outputDir = createDefaultModDir(zipPath);
    await extractRarArchive(zipPath, outputDir);
    addMod(zipPath, outputDir);
}

async function addMod(zipPath, outputDir) {
    let filename = path.basename(zipPath, path.extname(zipPath));
    let MR = new ModRepository();
    let mod = new Mod({
        path: outputDir,
        name: filename,
        realname: filename,
        status: ModStatus.ENABLED,
    });
    try {
        await MR.indexOfRealname(filename);
    } catch (e: any) {
        await MR.add(mod);
    }
}

function createDefaultModDir(zipPath: string) {
    let zipName = path.basename(zipPath, path.extname(zipPath));
    let outputDir = path.join(MODSDIR, zipName);
    if (fs.existsSync(outputDir)) fs.rmSync(outputDir, {
        recursive: true,
        force: true,
    });
    fs.mkdirSync(outputDir);
    return outputDir;
}