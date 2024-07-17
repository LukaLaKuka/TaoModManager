import path from 'path';
import fs from 'node:fs';
import { MODSDIR } from '../../config/paths';
import { decompressZip } from '../decompress/zip';
export async function decompressZipMod(zipPath: string) {
    let getName = (zipPath: string) => {
        let zipParts = zipPath.split(path.sep);
        let lastPart = zipParts[zipParts.length - 1];
        return lastPart.substring(0, lastPart.lastIndexOf('.'));
    }
    let zipName = getName(zipPath);
    let outputDir = path.join(MODSDIR, zipName);
    fs.mkdirSync(outputDir);
    await decompressZip(zipPath, outputDir);
}