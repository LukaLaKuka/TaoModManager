import path from "node:path";

export function getPathFilename(file) {
    return path.basename(file, path.extname(file));
}