const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  // APIs à exposer
});
