import path from "node:path";
import { CONFIGDIR, DATADIR, MODSDIR, MODSDIRWRAPPER, ZIPPATH } from "../..";
import fs from 'node:fs';
import { decompressZip } from "../modules/zip";
import { createAppDir } from "../modules/fs/mkdir";

export async function setupProject(app: Electron.App) {
    [CONFIGDIR, MODSDIRWRAPPER, DATADIR].forEach(async (dir) => {
        await createAppDir(dir, app);
    });

    if (!fs.existsSync(path.join(MODSDIR, 'loader.exe'))) {
        let zipPath = await ZIPPATH();
        if (zipPath) {
            await decompressZip(zipPath, MODSDIR);
        } else {
            alert(`Error decompressing Loader`);
        }
    }
}