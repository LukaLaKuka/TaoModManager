import path from 'path';
import fs from 'node:fs';
import { MODSDIR } from '../../config/paths';
import { decompressZip } from '../decompress/zip';
import { extractRarArchive } from '../decompress/unrar';

export async function decompressZipMod(zipPath: string) {
    let outputDir = createDefaultModDir(zipPath);
    await decompressZip(zipPath, outputDir);
}

export async function decompressRarMod(zipPath: string) {
    let outputDir = createDefaultModDir(zipPath);
    await extractRarArchive(zipPath, outputDir);
}

function createDefaultModDir(zipPath: string) {
    let zipName = path.basename(zipPath, path.extname(zipPath));
    let outputDir = path.join(MODSDIR, zipName);
    if (fs.existsSync(outputDir)) fs.rmdirSync(outputDir);
    fs.mkdirSync(outputDir);
    return outputDir;
}