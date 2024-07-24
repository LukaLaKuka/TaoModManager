import decompress from 'decompress';
import { decompressedFile } from '../../app/entities/decompressedFile';
import fs from 'node:fs';
import path from 'node:path';

export async function decompressZip(zipFile: string, output: string) {
  try {
    let files: decompressedFile[] = await decompress(zipFile);

    for (const file of files) {
      let outputPath = path.join(output, file.path);

      let parentDir = path.dirname(outputPath);
      if (!fs.existsSync(parentDir)) {
        fs.mkdirSync(parentDir, { recursive: true });
      }

      if (file.type === 'file') {
        if (file.data.length === 0) {
          file.type = 'directory';
        } else {
          fs.writeFileSync(outputPath, file.data);
          fs.chmodSync(outputPath, file.mode);
          fs.utimesSync(outputPath, new Date(), file.mtime);
        }
      }

      if (file.type === 'directory') {
        if (!fs.existsSync(outputPath)) {
          fs.mkdirSync(outputPath, { recursive: true });
        }
        fs.chmodSync(outputPath, file.mode);
      }
    }
    return true;

  } catch (e: any) {
    console.error('Error durante la descompresión:', e.message);
    return false;
  }
}
