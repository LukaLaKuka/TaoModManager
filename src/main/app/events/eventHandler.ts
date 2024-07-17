import { ipcMain } from "electron";
import { APPDIR } from "../..";
import { decompressZipMod } from "../modules/mods/decompressMods";

/**
 * Event Handler (IPC events emitted by front)
 * @param app Electron's Application
 */
export default function handleEvent() {

    ipcMain.handle('hello', async (_, __) => {
        console.log('Hello from back');
        return APPDIR;
    });
    
    ipcMain.handle('decompress', async (_, args) => {
        let userModPath: string = args[0];
        let ext = userModPath.substring(userModPath.lastIndexOf('.') + 1);
        console.log(ext);
        switch (ext) {
            case 'zip': decompressZipMod(userModPath); break;
            case 'rar': break;
            default: return;
        }
    });
}