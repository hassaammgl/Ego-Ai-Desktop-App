const { app, BrowserWindow, ipcMain, Menu } = require("electron/main");
const { menu } = require("./electron_scripts/Menu");
const path = require("node:path");
const exec = require("child_process").exec;

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    height: 800,
    width: 1200,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      contextIsolation: true,
    },
  });

  mainWindow.loadFile("./index.html");
  // set custom menu options
  let myMenu = new Menu.buildFromTemplate(menu(app));
  Menu.setApplicationMenu(myMenu);
};

app.whenReady().then(() => {
  ipcMain.on("get-info", (event, arg) => {
    const someInfo = "This is some information from the main process";
    event.reply("info-reply", someInfo);
  });
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

ipcMain.on("close", (event, arg) => {
  if (arg === "close window") {
    if (process.platform !== "darwin") app.quit();
  }
});
