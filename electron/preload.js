import { contextBridge } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  // APIs à exposer
});
