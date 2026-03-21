// src/main/shortcuts/shortcutTypes.js

const SHORTCUT_SCOPES = {
    MENU: 'menu',
    WINDOW: 'window',
    GLOBAL: 'global',
};

const SHORTCUT_CONTEXTS = {
    APP: 'app',
    AUTH: 'auth',
    DASHBOARD: 'dashboard',
    ORDER_ENTRY: 'order-entry',
    POSITIONS: 'positions',
    WATCHLIST: 'watchlist',
    BROKER_IBKR: 'broker-ibkr',
};

module.exports = {
    SHORTCUT_SCOPES,
    SHORTCUT_CONTEXTS,
};