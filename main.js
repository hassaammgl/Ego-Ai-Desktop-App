const { app, BrowserWindow, ipcMain, Menu } = require("electron/main");
const { menu } = require("./electron_scripts/Menu");
const path = require("node:path");
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    height: 800,
    width: 1200,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  ipcMain.on("set-title", (event, title) => {
    const webContents = event.sender;
    const win = BrowserWindow.fromWebContents(webContents);
    win.setTitle(title);
  }); 

  mainWindow.loadFile("./index.html");
  
  // set custom menu options
  Menu.setApplicationMenu(Menu.buildFromTemplate(menu(mainWindow)))
};


app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

ipcMain.on("close", (event, title) => {
  // const webContents = event.sender;
  // const win = BrowserWindow.fromWebContents(webContents);
  // win.setTitle(title);
  console.log(title);
});
