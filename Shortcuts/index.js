// src/main/shortcuts/index.js

const { appShortcuts } = require('./appShortcuts');
const { navigationShortcuts } = require('./navigationShortcuts');

const shortcuts = [
    ...appShortcuts,
    ...navigationShortcuts,
];

module.exports = {
    shortcuts,
};