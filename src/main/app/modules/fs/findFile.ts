import fs from 'node:fs';
import path from 'node:path';
import { APPDIR } from '../../..';

export async function findFile(filename: string, extensions: string[], rootPath: string | undefined = undefined): Promise<string | undefined> {
    rootPath = rootPath ?? APPDIR;

    let files = fs.readdirSync(rootPath);

    for (const file of files) {
        if (file === 'app.asar') continue;
        let filepath = path.join(rootPath, file);
        let fileStat = fs.statSync(filepath);
        if (fileStat.isDirectory()) {
            let found = findFile(filename, extensions, filepath);
            if (found) return found;
        }

        if (fileStat.isFile()) {
            if (file === filename) return filepath;
            let found = extensions.find((ext) => {
                if (ext.startsWith('.')) ext = ext.substring(1);
                return file === `${filename}.${ext}`;
            });
            if (found) return filepath;
        }
    }

    return undefined;
}