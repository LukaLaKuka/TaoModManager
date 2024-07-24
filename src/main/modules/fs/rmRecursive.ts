import fs from 'node:fs';
export function rmRecursive(path) {
    fs.rmSync(path, {
        recursive: true,
        force: true,
    });
}