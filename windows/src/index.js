import { app, ipcMain, BrowserWindow } from "electron";
import path from "path";
import glasstron from "glasstron";
import Logger from "electron-log";
import os from "os";
import { readFileSync, readdirSync } from "fs";
import { join } from "path";
Logger.log("Launching application...");
/**
 * Step by step info of what is happening.
 * Init function which makes a browser window similar to the one in browsers.
 * how to run - first type out `npm run build` in terminal to build es6 codes to common js code.
 * now type out `npm start` to launch the electron.
 */

const parts = readdirSync(join(__dirname, "..", "..", "parts"));

const init = () => {
  Logger.log(
    `OS Status :\nCPU Speed (mhz) : ${
      os.cpus()[0].speed
    }\nMemory Left : ${Math.floor(os.freemem / 1024 / 1024 / 1024)} gb`
  );
  Logger.log("Initializing main window...");
  const window = new glasstron.BrowserWindow({
    height: 500,
    width: 700,
    minHeight: 500,
    minHeight: 500,
    frame: false,
    icon: path.join(__dirname, "..", "..", "icons", "app.ico"),
    show: false,
    resizable: false,
    
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: false,
      preload: path.join(__dirname, "preload.js"),
      devTools: false,
    },
  });
  window.webContents.insertCSS(
    readFileSync(join(__dirname, "..", "..", "style.css"), {
      encoding: "ascii",
    })
  );
  window.blurType = "blurbehind";
  window.setBlur(true);
  window.loadFile(path.join(__dirname, "..", "..", "index.html"));

  // What will happen when you press minimize ? Gotta minimize the window
  ipcMain.handle("minimize", () => {
    window.minimize();
  });
  // when everything is loaded window is showed
  window.once("ready-to-show", () => {
    Logger.log("Window initialized!");
    window.show();
  });
  // What will happen when you press close ? Gotta close the window
  ipcMain.handle("close", () => {
    window.close();
    Logger.log("Application Closing....");
  });
  ipcMain.handle("dom-ready", () => {
    Logger.log("DOM Is Ready sending Part Files...");
    parts.forEach((v) => {
      window.webContents.send(
        "append-html-to-dom",
        readFileSync(join(__dirname, "..", "..", "parts", v), {
          encoding: "ascii",
        }),
        "button-subscriber"
      );
      Logger.log(`Sent ${v} to DOM!`);
    });
  });
};
// when app is ready we call `init` function above
app.once("ready", () => {
  init();
});
// when all windows are closed we quit our application
app.on("window-all-closed", () => {
  app.quit();
});
