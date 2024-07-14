// const { Menu, MenuItem, globalShortcut } = require('electron');
const { app } = require('electron');
const localShortcut = require('electron-localshortcut');


// module.exports = (mainWindow) => {
//   mainWindow.webContents.on('before-input-event', (event, input) => {
//       if (input.control && input.key.toLowerCase() === 'x') {
//           console.log('Control+X is pressed');
//           event.preventDefault();
//           // Perform your custom action here
//       }

//       if (input.alt && input.key.toLowerCase() === 'a') {
//           console.log('Alt+A is pressed');
//           event.preventDefault();
//           // Perform your custom action here
//       }
//   });
// };

app.on('ready', () => {
  
    // Register a 'CommandOrControl+X' shortcut listener.

  // localShortcut.register('CommandOrControl+F', () => {
  //   console.log(app.document.getElementById('header').className);   });
  localShortcut.register('CommandOrControl+X', () => {
    console.log('Cut');   });
  localShortcut.register('CommandOrControl+Q', () => {
  console.log('Quit');   });
  localShortcut.register('CommandOrControl+H', () => {
  console.log('Hide');   });
  localShortcut.register('CommandOrControl+L', () => {
  console.log('L');      });
  
  localShortcut.register('CommandOrControl+G', () => {
  console.log('CommandOrControl+G is pressed - greene?'); });
  // mainWindow.webContents.send('change-color', 'green'); 

});

// function registerShortcuts() {
// console.log("resistered")
//   // Register a 'CommandOrControl+X' shortcut listener.
// localShortcut.register('CommandOrControl+X', () => {
// console.log('Cut');   });
// localShortcut.register('CommandOrControl+Q', () => {
// console.log('Quit');   });
// localShortcut.register('CommandOrControl+H', () => {
// console.log('Hide');   });
// localShortcut.register('CommandOrControl+L', () => {
// console.log('L');      });

// localShortcut.register('CommandOrControl+G', () => {
// console.log('CommandOrControl+G is pressed - greene?');
// // mainWindow.webContents.send('change-color', 'green');
// });

// Unregister all shortcuts when the app quits
// app.on('will-quit', () => {
//   // globalShortcut.unregisterAll();
//   console.log("Application quit")

//   localShortcut.unregisterAll();
// });

// function unregisterShortcuts() {
//   // Unregister all shortcuts.
// globalShortcut.unregisterAll();
// localShortcut.unregisterAll();
// }

// module.exports = {
// registerShortcuts,
// unregisterShortcuts
// };




// console.log('CommandOrControl+L is pressed');   
// not needed for now
//if (!ret) { console.log('registration failed');
//   }
// Check whether a shortcut is registered.
//console.log(globalShortcut.isRegistered('CommandOrControl+X'));
// }

// don't need this in here as it wil lbe moved to main.js
// function forceFocusWindow(window) {
//   // mac specific
//   if (process.platform === 'darwin') app.focus({ steal: true });
//   // windows/linux specific
//   else {
//     if (!window) return;
//     // Restore the window if it's minimized.
//     if (window.isMinimized()) window.restore();
//     // Show the window in case it's hidden.
//     window.show();
//   }
// }



// does this do anything?
// const shortcuts = [
//     { accelerator: 'CommandOrControl+X', action: 'cut' },
//     { accelerator: 'CommandOrControl+C', action: 'copy' },
//     { accelerator: 'CommandOrControl+V', action: 'paste' },
//     // Add more shortcuts as needed
// ];

// const menu = new Menu()
// menu.append(new MenuItem({
// label: 'Shortcuts',
// submenu: [{
//     role: 'help',
//     // accelerator: process.platform === 'darwin' ? 'Alt+Cmd+L' : 'Alt+Shift+L',
//     // click: () => { console.log('Electron rocks!'),
//     accelerator: process.platform === 'darwin' ? 'L' : 'l', // what do you press
//     click: () => { console.log('L was pressed!') }          // what does it do
//     }] 
// })) 


// // Need the below
// function registerShortcuts(win) {
//     shortcuts.forEach((shortcut) => {
//         globalShortcut.register(shortcut.accelerator, () => {
//             console.log(`Shortcut action: ${shortcut.action}`);
//             // Perform the action, e.g., sending an IPC message to the renderer process
//             win.webContents.send('shortcut-action', shortcut.action);
//         });
//     });
// }


  // Register a 'CommandOrControl+X' shortcut listener.
// const ret = globalShortcut.register('CommandOrControl+X', () => {
//     console.log('CommandOrControl+X is pressed');
// });

// menu.append(new MenuItem({
//     label: 'Shortcuts',
//     submenu: [{
//       role: 'help',
//       accelerator: process.platform === 'darwin' ? 'Alt+Cmd+L' : 'Alt+Shift+L', // Alt is option on mac
//       click: () => { console.log('Electron rocks!')

//       // document.querySelector('.container').classList.toggle('animate');
//       // document.querySelector('.grid-container').style.backgroundColor = 'lightseagreen';

//       // document.addEventListener('keydown', function(event) {
//       //   if (event.key === 'c') {
//       //     // Change color of the grid area components
//       //     document.querySelector('.grid-container').style.backgroundColor = 'lightseagreen';
//       //   }
//       // });
//       }
//     }]
//   })) 

// const menu = new Menu()
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

// function unregisterShortcuts() {
//     globalShortcut.unregisterAll();
//     localShortcut.unregisterAll();
// }



// need to put all of the keyboard shortcuts into one file