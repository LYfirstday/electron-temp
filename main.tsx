import { app, BrowserWindow } from 'electron';

let mainWindow: BrowserWindow = null;
let createWindow = function () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true
    }
    // fullscreenable:false,
    // maximizable:false
  })
  mainWindow.webContents.openDevTools({ mode: 'detach' });
  mainWindow.loadFile('./dist/index.html');
  mainWindow.on('closed', function () {
    mainWindow = null;
  })
}
app.on('ready', createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
