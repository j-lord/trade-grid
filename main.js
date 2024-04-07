// main.js

// Modules to control application life and create native browser window
const { app, screen, BrowserWindow, globalShortcut } = require('electron')
const path = require('node:path')


require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
  awaitWriteFinish: true,
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) 
      createWindow()
    })
  })

  

const createWindow = () => {
  // Create the browser window.
const mainWindow = new BrowserWindow({
width: 1200,
height: 800,
padding: 100,
x: 50, // X position of the window
y: 700, // Y position of the window
frame: false, // removes the window title
titleBarStyle: 'hidden', // Hides the default title bar on macOS

// const shortcut = globalShortcut.register('Control+Space', () => {
//   // if (window) {
//     BrowserWindow.show();
//     BrowserWindow.focus();
//       console.log('Electron loves global shortcuts!')
// }),

titleBarOverlay: {
  color: '#2f3241',
  symbolColor: '#74b1be',
  height: 40,
}, // Custom position of the traffic light buttons

// keyboard shortcuts here?

webPreferences: {
    preload: path.join(__dirname, 'preload.js'),
    nodeIntegration: true, // enabled for the window controls JavaScript to work
    // enableRemoteModule: true,
    // contextIsolation: false,
    // devTools: false, // this turns off the ability to hit option+cmd+i

  },
trafficLightPosition: { y: 20 }

})


mainWindow.setWindowButtonVisibility(true) // shows the title Bar traffic light buttons
  // and load the index.html of the app.
  mainWindow.loadFile('index.html')
  }

// app.whenReady().then(() => {
  // const window = BrowserWindow.getFocusedWindow();
  // globalShortcut.register('Shift+CommandOrControl+I', () => {
  // globalShortcut.register('Control+Space', () => {
      // if (window) {
        // if (window.isMinimized()) window.restore();
          // mainWindow.show();
          // mainWindow.focus();
          // console.log('Electron loves global shortcuts!')
// }
  // })

// }).then(createWindow)


app.on('ready', () => {
  const primaryDisplay = screen.getPrimaryDisplay();
  const { width, height } = primaryDisplay.workAreaSize;

  console.log(`Screen size: ${width}x${height}`);
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q - like mail 
app.on('window-all-closed', () => {
if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.