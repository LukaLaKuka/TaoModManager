import path from 'path';
import fs from 'node:fs';
import { MODSDIR } from '../../config/paths';
import { decompressZip } from '../decompress/zip';
import { extractRarArchive } from '../decompress/unrar';

export async function decompressZipMod(zipPath: string) {
    let zipName = getPathFileName(zipPath);
    let outputDir = path.join(MODSDIR, zipName);
    fs.mkdirSync(outputDir);
    await decompressZip(zipPath, outputDir);
}

export async function decompressRarMod(zipPath: string) {
    let zipName = getPathFileName(zipPath);
    let outputDir = path.join(MODSDIR, zipName);
    fs.mkdirSync(outputDir);
    await extractRarArchive(zipPath, outputDir);
}

function getPathFileName(zipPath: string) {
    let zipParts = zipPath.split(path.sep);
    let lastPart = zipParts[zipParts.length - 1];
    return lastPart.substring(0, lastPart.lastIndexOf('.'));
}