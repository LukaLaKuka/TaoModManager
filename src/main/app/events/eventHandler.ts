import { ipcMain } from "electron";
import { APPDIR } from "../..";

/**
 * Event Handler (IPC events emitted by front)
 * @param app Electron's Application
 */
export default function handleEvent() {

    ipcMain.handle('hello', async (_, __) => {
        console.log('Hello from back');
        return APPDIR;
    });
    
    ipcMain.handle('descompress', async (_, args) => {
        return args;
    });
}