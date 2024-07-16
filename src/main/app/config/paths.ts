import { app } from "electron";
import path from "node:path";
import { findFile } from "../modules/fs/findFile";

export const APPDIR = path.join(app.getPath('appData'), app.getName());
export const DATADIR = path.join(APPDIR, 'data');
export const MODSDIRWRAPPER = path.join(DATADIR, 'mods');
export const MODSDIR = path.join(MODSDIRWRAPPER, 'Mods');
export const DISABLEDMODSDIR = path.join(MODSDIRWRAPPER, 'DisabledMods');
export const CONFIGDIR = path.join(DATADIR, 'config');
export const ZIPNAME = '3dmigoto';
export const ZIPPATH = async (): Promise<string | undefined> => {
    // Find 3dmigoto.zip
    return (await findFile(ZIPNAME, ['zip'], 'resources'));
}