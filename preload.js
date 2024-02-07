const { contextBridge, ipcRenderer } = require("electron/renderer");
const si = require("systeminformation");
const { handleCommands } = require("./functions/HandleCommands");

contextBridge.exposeInMainWorld("electronAPI", {
  setTitle: (title) => ipcRenderer.send("set-title", title),
  closeWin: () => ipcRenderer.send("close", "close window"),
  systemInfo: async () =>
    await si.get({
      cpu: "*",
      mem: "*",
      osInfo: "*",
      networkInterfaces: "*",
    }),
});

contextBridge.exposeInMainWorld("mainData", {
  command: handleCommands,
});
