import { ipcMain } from "electron";
import { startGame } from "../app/src/game/startGame";
import { openDir } from "../modules/fs/openDir";
import { decompressRarMod, decompressZipMod } from "../app/src/mods/decompressMods";
import { getGenshinExecPath, setGenshinExecPath } from "../app/src/mods/config";
import { ModRepository } from "../app/src/mods/modRepository";
import { execute } from "../modules/cmd/execute";
import { MODELFIXEREXECUTABLE } from "../config/paths";
import { deleteMod } from "../app/src/mods/deleteMod";
import { disableMod } from "../app/src/mods/disableMod";
import { enableMod } from "../app/src/mods/enableMod";
import { setModName } from "../app/src/mods/setModName";


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
        await startGame()
    });

    ipcMain.handle('getMods', async (_, __) => {
        let MR = new ModRepository();
        return await MR.get();
    });

    ipcMain.handle('fixModels', async (_, __) => {
        await execute(MODELFIXEREXECUTABLE);
    });

    ipcMain.handle('enableMod', async (_, args) => {
        enableMod(args[0]);

    });

    ipcMain.handle('disableMod', async (_, args) => {
        disableMod(args[0]);

    });

    ipcMain.handle('openDir', async (_, args) => {
        openDir(args[0]);
    });

    ipcMain.handle('deleteMod', async (_, args) => {
        await deleteMod(args[0]);
    });

    ipcMain.handle('setModName', async (_, args) => {
        await setModName(args[0], args[1]);
    });
}