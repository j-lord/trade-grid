// src/main/shortcuts/appShortcuts.js

const { SHORTCUT_SCOPES, SHORTCUT_CONTEXTS } = require('./shortcutTypes');

const appShortcuts = [
    {
        id: 'app.openSettings',
        description: 'Open settings',
        accelerator: 'CommandOrControl+,',
        command: 'app.openSettings',
        scope: SHORTCUT_SCOPES.MENU,
        contexts: [
            SHORTCUT_CONTEXTS.APP,
            SHORTCUT_CONTEXTS.DASHBOARD,
            SHORTCUT_CONTEXTS.AUTH,
            SHORTCUT_CONTEXTS.POSITIONS,
            SHORTCUT_CONTEXTS.ORDER_ENTRY,
            SHORTCUT_CONTEXTS.WATCHLIST,
        ],
    },
    {
        id: 'app.logout',
        description: 'Log out of active broker session',
        accelerator: 'CommandOrControl+Shift+L',
        command: 'app.logout',
        scope: SHORTCUT_SCOPES.MENU,
        contexts: [
            SHORTCUT_CONTEXTS.APP,
            SHORTCUT_CONTEXTS.DASHBOARD,
            SHORTCUT_CONTEXTS.POSITIONS,
            SHORTCUT_CONTEXTS.ORDER_ENTRY,
            SHORTCUT_CONTEXTS.WATCHLIST,
            SHORTCUT_CONTEXTS.BROKER_IBKR,
        ],
        dangerous: true,
    },
    {
        id: 'app.lockWorkspace',
        description: 'Lock workspace',
        accelerator: 'CommandOrControl+Shift+K',
        command: 'app.lockWorkspace',
        scope: SHORTCUT_SCOPES.MENU,
        contexts: [
            SHORTCUT_CONTEXTS.APP,
            SHORTCUT_CONTEXTS.DASHBOARD,
            SHORTCUT_CONTEXTS.POSITIONS,
            SHORTCUT_CONTEXTS.ORDER_ENTRY,
            SHORTCUT_CONTEXTS.WATCHLIST,
            SHORTCUT_CONTEXTS.BROKER_IBKR,
        ],
    },
];

module.exports = {
    appShortcuts,
};