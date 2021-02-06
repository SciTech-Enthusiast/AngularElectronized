const { app, BrowserWindow } = require("electron");
const { ipcMain } = require("electron");
const { session } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  
  win.loadFile("./dist/angular-build/index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// ipcMain.on("asynchronous-message", (event, arg) => {
//   console.log(arg); // prints "ping"
//   event.reply("asynchronous-reply", "Hello "+ arg);
// });

// ipcMain.on("synchronous-message", (event, arg) => {
//   console.log(arg); // prints "ping"
//   event.returnValue = "pong";
// });

ipcMain.on("get-cookie-sync", (event, arg) => {
  //get cookie based on arg

  session.defaultSession.cookies
    .get(arg)
    .then((cookies) => {
      event.returnValue =cookies
    })
    .catch((error) => {
      console.log(error)
      event.returnValue=undefined
    });
  
});


ipcMain.on("set-cookie-sync", (event, arg) => {
  //get cookie based on arg
  session.defaultSession.cookies.set(arg)
  .then(() => {
    // success
    event.returnValue =true
  }, (error) => {
    console.error(error)
    event.returnValue =false
  })
  
});
