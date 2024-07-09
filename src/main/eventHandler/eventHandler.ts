import { ipcMain } from "electron";
import { descompress } from "../app/mods/descompress";

/**
 * Event Handler (IPC events emitted by front)
 * @param app Electron's Application
 */
export default function handleEvent() {
    ipcMain.handle('hello', async (_, __) => {
        console.log('Hello from back');
        return __dirname;
    });
    
    ipcMain.handle('descompress', async (e, args) => {
        descompress(args);
    });
}