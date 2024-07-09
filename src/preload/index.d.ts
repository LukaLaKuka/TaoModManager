import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface ElectronAPI {
    [key: string]: (...args: any[]) => Promise<any>;
  }

  interface Window {
    electron: ElectronAPI
    api: unknown
  }
}
