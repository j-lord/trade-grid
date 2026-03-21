// This is what the shortcut nagivation looks like 
// appShortcuts.js
// navigationShortcuts.js
//    ↓
// shortcuts/index.js
//    ↓
// shortcuts/shortcutService.js
//    ↓
// main.js
//    ↓
// preload.js bridges to renderer
//    ↓
// App.jsx responds to commands


// src/main/shortcuts/navigationShortcuts.js

const { SHORTCUT_SCOPES, SHORTCUT_CONTEXTS } = require('./shortcutTypes');

const navigationShortcuts = [
    {
        id: 'nav.focusSymbolSearch',
        description: 'Focus symbol search',
        accelerator: 'CommandOrControl+K',
        command: 'nav.focusSymbolSearch',
        scope: SHORTCUT_SCOPES.MENU,
        contexts: [
            SHORTCUT_CONTEXTS.DASHBOARD,
            SHORTCUT_CONTEXTS.POSITIONS,
            SHORTCUT_CONTEXTS.ORDER_ENTRY,
            SHORTCUT_CONTEXTS.WATCHLIST,
            SHORTCUT_CONTEXTS.BROKER_IBKR,
        ],
        disabledInInputs: true,
    },
    {
        id: 'nav.goToDashboard',
        description: 'Go to dashboard',
        accelerator: 'CommandOrControl+1',
        command: 'nav.goToDashboard',
        scope: SHORTCUT_SCOPES.MENU,
        contexts: [
            SHORTCUT_CONTEXTS.DASHBOARD,
            SHORTCUT_CONTEXTS.POSITIONS,
            SHORTCUT_CONTEXTS.ORDER_ENTRY,
            SHORTCUT_CONTEXTS.WATCHLIST,
            SHORTCUT_CONTEXTS.BROKER_IBKR,
        ],
    },
    {
        id: 'nav.goToPositions',
        description: 'Go to positions',
        accelerator: 'CommandOrControl+2',
        command: 'nav.goToPositions',
        scope: SHORTCUT_SCOPES.MENU,
        contexts: [
            SHORTCUT_CONTEXTS.DASHBOARD,
            SHORTCUT_CONTEXTS.POSITIONS,
            SHORTCUT_CONTEXTS.ORDER_ENTRY,
            SHORTCUT_CONTEXTS.WATCHLIST,
            SHORTCUT_CONTEXTS.BROKER_IBKR,
        ],
    },
    {
        id: 'nav.goToOrderEntry',
        description: 'Go to order entry',
        accelerator: 'CommandOrControl+3',
        command: 'nav.goToOrderEntry',
        scope: SHORTCUT_SCOPES.MENU,
        contexts: [
            SHORTCUT_CONTEXTS.DASHBOARD,
            SHORTCUT_CONTEXTS.POSITIONS,
            SHORTCUT_CONTEXTS.ORDER_ENTRY,
            SHORTCUT_CONTEXTS.WATCHLIST,
            SHORTCUT_CONTEXTS.BROKER_IBKR,
        ],
    },
    {
        id: 'nav.nextPanel',
        description: 'Move to next panel',
        accelerator: 'Control+Tab',
        command: 'nav.nextPanel',
        scope: SHORTCUT_SCOPES.MENU,
        contexts: [
            SHORTCUT_CONTEXTS.DASHBOARD,
            SHORTCUT_CONTEXTS.POSITIONS,
            SHORTCUT_CONTEXTS.ORDER_ENTRY,
            SHORTCUT_CONTEXTS.WATCHLIST,
            SHORTCUT_CONTEXTS.BROKER_IBKR,
        ],
        disabledInInputs: true,
    },
    {
        id: 'nav.previousPanel',
        description: 'Move to previous panel',
        accelerator: 'Control+Shift+Tab',
        command: 'nav.previousPanel',
        scope: SHORTCUT_SCOPES.MENU,
        contexts: [
            SHORTCUT_CONTEXTS.DASHBOARD,
            SHORTCUT_CONTEXTS.POSITIONS,
            SHORTCUT_CONTEXTS.ORDER_ENTRY,
            SHORTCUT_CONTEXTS.WATCHLIST,
            SHORTCUT_CONTEXTS.BROKER_IBKR,
        ],
        disabledInInputs: true,
    },
];

module.exports = {
    navigationShortcuts,
};