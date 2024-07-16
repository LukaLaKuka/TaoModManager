import path from "node:path";
import { TaoModManagerApp } from "./app/app";
import { setupProject } from "./app/setup/setupDirs";
import { app } from "electron";
import { findFile } from "./app/modules/fs/findFile";

export const bootstrap = async () => {
  await setupProject(app);
};

const APPDIR = path.join(app.getPath('appData'), app.getName());
export { APPDIR };

console.log(`Application executing: ${APPDIR}`)
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

TaoModManagerApp.start();