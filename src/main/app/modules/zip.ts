import decompress from 'decompress'
import { decompressedFile } from '../../interfaces/decompressedFile'
import fs from 'node:fs'
import path from 'node:path'

export async function decompressZip(zipFile: string, output: string) {
  try {
    let files: decompressedFile[] = await decompress(zipFile);
    files.forEach(async (file: decompressedFile) => {
      let outputPath = path.join(output, file.path);

      if (file.type === 'directory') {
        fs.mkdirSync(outputPath, { recursive: true });
        fs.chmodSync(outputPath, file.mode);
      }

      let parentDir = path.dirname(outputPath);
      if (!fs.existsSync(parentDir)) fs.mkdirSync(parentDir);

      if (file.type === 'file') {
        await fs.writeFileSync(outputPath, file.data);
        await fs.chmodSync(outputPath, file.mode);
        await fs.utimesSync(outputPath, new Date(), file.mtime);
      }
    });
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}
