import fs from 'node:fs';

export async function createAppDir(dir: string, _: Electron.App) {
    try {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
    } catch (e: any) {
        console.error(e.message);
        //app.exit();
    }
}