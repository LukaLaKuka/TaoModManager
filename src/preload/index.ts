import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

const names = [
  'decompress',
  'getGenshinPath',
  'setGenshinPath',
  'play',
  'getMods',
  'fixModels',
  'enableMod',
  'disableMod',
  'openDir',
  'deleteMod',
  'setModName',
];

function invoke(names: string[]) {
  const obj: object = {};
  names.forEach((name: string) => {
    obj[name] = (...args) => ipcRenderer.invoke(name, args);
  });
  return obj;
}

const api = invoke(names);

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', api)
//    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
