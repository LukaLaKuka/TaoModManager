import fs from 'node:fs';


export function mvDir(oldPath: string, newPath: string) {
    try {
        fs.renameSync(oldPath, newPath);
    } catch (e) {
        console.error(e);
    }
}