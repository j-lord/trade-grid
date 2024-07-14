// main.js
// Modules to control application life and create native browser window
const { app, screen, BrowserWindow, globalShortcut, Menu, MenuItem } = require('electron');
const path = require('node:path')
    // Register shortcuts from another file
    // const { registerShortcuts, unregisterShortcuts, localShortcut } = require('./shortcuts');
// 

// import shortcuts from another file
  require('./shortcuts');


let mainWindow;

require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
  awaitWriteFinish: true,
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()      // cerate application window
  // registerShortcuts() // register shortcuts from the shortcuts.js file
  
  // Bring active window to the front  Mac: CMD + I 
  // this bring the app in focus
  const ret = globalShortcut.register('CommandOrControl+I', () => {
    forceFocusWindow(mainWindow);
    console.log('front');
}); if (!ret) { console.log('Registration failed'); }


    // TESTING //////////////////

  // Register local shortcuts
  // localShortcut.register(mainWindow, 'Ctrl+Shift+Up', () => {
  //   mainWindow.webContents.send('increase-height');
  // });

  // localShortcut.register(mainWindow, 'Ctrl+Shift+Down', () => {
  //   mainWindow.webContents.send('decrease-height');
  // });


    // TESTING //////////////////

  

    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open - like in the mail app
      if (BrowserWindow.getAllWindows().length === 0) 
      createWindow()
  })
})

const menu = new Menu()
// menu.append(new MenuItem({
//   label: 'Shortcuts',
//   submenu: [{
//     role: 'help',
//     // accelerator: process.platform === 'darwin' ? 'Alt+Cmd+L' : 'Alt+Shift+L',
//     // click: () => { console.log('Electron rocks!'),
//     accelerator: process.platform === 'darwin' ? 'L' : 'l',
//     click: () => { console.log('L was pressed!')
//     }
//   }]
// })) 



menu.append(new MenuItem({
  label: 'Shortcuts',
  submenu: [{
    role: 'help',
    accelerator: process.platform === 'darwin' ? 'Alt+Cmd+L' : 'Alt+Shift+L', // Alt is option on mac
    click: () => { console.log('Electron rocks!')
    
    // document.querySelector('.container').classList.toggle('animate');
    // document.querySelector('.grid-container').style.backgroundColor = 'lightseagreen';

    // document.addEventListener('keydown', function(event) {
    //   if (event.key === 'c') {
    //     // Change color of the grid area components
    //     document.querySelector('.grid-container').style.backgroundColor = 'lightseagreen';
    //   }
    // });
    }
  }]
})) 



Menu.setApplicationMenu(menu)


const createWindow = () => {
  // Create the browser window
  // Get the measurements of the user's screen
  const primaryDisplay = screen.getPrimaryDisplay();
  const { width, height } = primaryDisplay.workAreaSize;
  
  const mainWindow = new BrowserWindow({
    width: width * 0.5,
    minWidth: width * 0.5,
    height: height * 0.75,
    minHeight: height * 0.6,
    x: 50, // X starting position of the window
    y: 100, // Y starting position of the window
    frame: false, // removes the window title
    titleBarStyle: 'hidden', // Hides the default title bar on macOS
    trafficLightPosition: { x: 18, y: 14 },
    titleBarOverlay: {
      color: '#2f3241',
      symbolColor: '#74b1be',
      height: 40,
    }, // Custom position of the traffic light buttons
    
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nativeWindowOpen: true, // allows you to access the DOM of another active window
      nodeIntegration: true, // enabled for the window controls JavaScript to work
      // enableRemoteModule: true,
      // contextIsolation: false,
      devTools: true, // this turns off the ability to hit option+cmd+i
    },
  })
  
  mainWindow.setWindowButtonVisibility(true) // shows the title Bar traffic light buttons
  mainWindow.loadFile('index.html') // load the index.html of the app.
  

  // Need to figure out how to add graphs into a window inside of the work area
  // do this first thing sunday morning
}

// this is the function that forces the main window to the front
// putting this here since main window is loaded in main 
function forceFocusWindow(window) {
  // mac specific.
  if (process.platform === 'darwin') app.focus({ steal: true });
  // windows/linux specific
  else {
    if (!window) return;
    // Restore the window if it's minimized.
    if (window.isMinimized()) window.restore();
    // Show the window in case it's hidden.
    window.show();
  }
}

app.on('will-quit', () => {
  console.log("Application quit")
  // Unregister global shortcuts
  globalShortcut.unregisterAll();
  localShortcut.unregisterAll();
  // unregisterShortcuts();
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q - like mail 
app.on('window-all-closed', () => {
  // uncomment this if when you want the app to stay active even after
  // all windows have been closed
  // if (process.platform !== 'darwin') 
    app.quit()
  // console.log(process.platform)
  console.log("All windows closed")
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.