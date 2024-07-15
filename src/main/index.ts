import { app, shell, BrowserWindow } from 'electron'
import path, { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import handleEvent from './eventHandler/eventHandler'
import { setupProject } from './app/setup/setupDirs'
import { findFile } from './app/modules/fs/findFile'

function createWindow(): void {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    minWidth: 505,
    show: false,
    autoHideMenuBar: true,
    icon,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', async () => {
    mainWindow.show();
    await bootstrap();
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

handleEvent();

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

const APPDIR = path.join(app.getPath('appData'), app.getName());

export { APPDIR };

console.log(APPDIR)
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

const bootstrap = async () => {
  await setupProject(app)
};