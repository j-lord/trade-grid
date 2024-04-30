const { globalShortcut } = require('electron');

const shortcuts = [
    { accelerator: 'CommandOrControl+X', action: 'cut' },
    { accelerator: 'CommandOrControl+C', action: 'copy' },
    { accelerator: 'CommandOrControl+V', action: 'paste' },
    // Add more shortcuts as needed
];
// add all of the keybinded shortcuts here
function registerShortcuts(win) {
    shortcuts.forEach((shortcut) => {
        globalShortcut.register(shortcut.accelerator, () => {
            console.log(`Shortcut action: ${shortcut.action}`);
            // Perform the action, e.g., sending an IPC message to the renderer process
            win.webContents.send('shortcut-action', shortcut.action);
        });
    });
}

function unregisterShortcuts() {
    globalShortcut.unregisterAll();
}

module.exports = { registerShortcuts, unregisterShortcuts };

// need to put all of the keyboard shutcuts into one forl