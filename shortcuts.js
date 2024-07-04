// const { Menu, MenuItem, globalShortcut } = require('electron');
const { globalShortcut } = require('electron');
const localShortcut = require('electron-localshortcut');

function registerShortcuts() {
  // Register a 'CommandOrControl+X' shortcut listener.
localShortcut.register('CommandOrControl+X', () => {
console.log('CommandOrControl+X is pressed');   });
localShortcut.register('CommandOrControl+L', () => {
document.querySelector('.Banner').style.backgroundColor = 'red';
// console.log('CommandOrControl+L is pressed');   
});
// not needed for now
//if (!ret) { console.log('registration failed');
//   }
// Check whether a shortcut is registered.
//console.log(globalShortcut.isRegistered('CommandOrControl+X'));
}

function unregisterShortcuts() {
  // Unregister all shortcuts.
globalShortcut.unregisterAll();
localShortcut.unregisterAll();
}

module.exports = {
registerShortcuts,
unregisterShortcuts
};


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