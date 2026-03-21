// src/main/shortcuts/shortcutService.js

const { Menu, globalShortcut } = require('electron');
const { shortcuts } = require('./index');

function sendCommandToRenderer(win, command) {
    if (!win || win.isDestroyed()) return;
    win.webContents.send('shortcut:command', { command });
}

function buildMenuTemplate(win) {
    const localShortcuts = shortcuts.filter(
        (shortcut) => shortcut.scope === 'menu' || shortcut.scope === 'window'
    );

    const shortcutItems = localShortcuts.map((shortcut) => ({
        label: shortcut.description,
        accelerator: shortcut.accelerator,
        click: () => sendCommandToRenderer(win, shortcut.command),
    }));

    return [
        {
            label: 'App',
            submenu: shortcutItems,
        },
    ];
}

function registerShortcutMenu(win) {
    const template = buildMenuTemplate(win);
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
}

function registerGlobalShortcuts(win) {
    const globalShortcuts = shortcuts.filter(
        (shortcut) => shortcut.scope === 'global'
    );

    globalShortcuts.forEach((shortcut) => {
        const success = globalShortcut.register(shortcut.accelerator, () => {
            sendCommandToRenderer(win, shortcut.command);
        });

        if (!success) {
            console.warn(
                `Failed to register global shortcut: ${shortcut.accelerator} (${shortcut.id})`
            );
        }
    });
}

function unregisterGlobalShortcuts() {
    globalShortcut.unregisterAll();
}

module.exports = {
    registerShortcutMenu,
    registerGlobalShortcuts,
    unregisterGlobalShortcuts,
};