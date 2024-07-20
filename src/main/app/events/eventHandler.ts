import { ipcMain } from "electron";
import { decompressRarMod, decompressZipMod } from "../modules/mods/decompressMods";
import { getGenshinExecPath, setGenshinExecPath } from "../modules/mods/config";

/**
 * Event Handler (IPC events emitted by front)
 * @param app Electron's Application
 */
export default function handleEvent() {

    ipcMain.handle('decompress', async (_, args) => {
        let userModPath: string = args[0];
        let ext = userModPath.substring(userModPath.lastIndexOf('.') + 1);
        switch (ext) {
            case 'zip': decompressZipMod(userModPath); break;
            case 'rar': decompressRarMod(userModPath); break;
            default: return;
        }
    });

    ipcMain.handle('getGenshinPath', async (_, __) => {
        return (await getGenshinExecPath());
    });

    ipcMain.handle('setGenshinPath', async (_, args) => {
        await setGenshinExecPath(args[0]);
    });

    ipcMain.handle('play', async (_, __) => {

    });

    ipcMain.handle('getMods', async (_, __) => {

    });

    ipcMain.handle('fixModels', async (_, __) => {

    });
}