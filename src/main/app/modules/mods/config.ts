import path from "node:path";
import fs from 'node:fs';
import { getConfig, setConfig } from "../fs/jsonHandler";

const genshinKey = 'genshin_path';
const possiblePaths = [
    'C:\\Program Files\\Genshin Impact',
    'C:\\Program Files (x86)\\Genshin Impact',
    'C:\\Program Files\\miHoYo\\Genshin Impact',
    'C:\\Program Files (x86)\\miHoYo\\Genshin Impact',
    'C:\\Games\\Genshin Impact',
    'D:\\Games\\Genshin Impact',
    'D:\\Genshin Impact game',
    'E:\\Games\\Genshin Impact',
];
const executableName = 'GenshinImpact.exe';

function defaultPath() {
    for (const possiblePath of possiblePaths) {
        let executablePath = path.join(possiblePath, executableName);
        if (fs.existsSync(executablePath)) return executablePath;
    }
    return undefined;
}

export async function getGenshinExecPath() {
    let genshinPath = getConfig(genshinKey);
    if (!genshinPath) {
        setConfig(genshinKey, defaultPath);
        genshinPath = defaultPath();
    }

    if (!genshinPath) {
        return 'not configured';
    }
    return genshinPath
}

export async function setGenshinExecPath(path) {
    setConfig(genshinKey, path);
}