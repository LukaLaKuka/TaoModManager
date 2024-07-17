import path from "node:path";
import fs from 'node:fs';
import { decompressZip } from "../modules/decompress/zip";
import { createAppDir } from "../modules/fs/mkdir";
import { CONFIGDIR, DATADIR, MODSDIRWRAPPER, ZIPPATH } from "../config/paths";

export async function setupProject(app: Electron.App) {
    [CONFIGDIR, MODSDIRWRAPPER, DATADIR].forEach(async (dir) => {
        await createAppDir(dir, app);
    });

    if (!fs.existsSync(path.join(MODSDIRWRAPPER, 'loader.exe'))) {
        let zipPath = await ZIPPATH();
        if (zipPath) {
            await decompressZip(zipPath, MODSDIRWRAPPER);
        } else {
            alert(`Error decompressing Loader`);
        }
    }
}