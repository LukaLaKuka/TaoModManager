import { shell } from "electron";

export function openDir(path) {
    shell.openPath(path);
}