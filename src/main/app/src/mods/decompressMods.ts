import path from 'path';
import fs from 'node:fs';
import { decompressZip } from '../../../modules/decompress/zip';
import { extractRarArchive } from '../../../modules/decompress/unrar';
import { ModRepository } from './modRepository';
import { Mod, ModStatus } from '../../entities/Mod';
import { MODSDIR } from '../../../config/paths';
import { rmRecursive } from '../../../modules/fs/rmRecursive';

export async function decompressZipMod(zipPath: string) {
    let outputDir = createDefaultModDir(zipPath);
    addMod(zipPath, outputDir);
    await decompressZip(zipPath, outputDir);
}

export async function decompressRarMod(zipPath: string) {
    let outputDir = createDefaultModDir(zipPath);
    addMod(zipPath, outputDir);
    await extractRarArchive(zipPath, outputDir);
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
    if (fs.existsSync(outputDir)) rmRecursive(outputDir);
    fs.mkdirSync(outputDir);
    return outputDir;
}