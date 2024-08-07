import path from "node:path";
import fs from 'node:fs';
import { CONFIGDIR, DATADIR, MODSDIRWRAPPER, ZIPPATH } from "../../config/paths";
import { createAppDir } from "../../modules/fs/mkdir";
import { decompressZip } from "../../modules/decompress/zip";

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