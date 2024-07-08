const { ipcRenderer } = require('electron');

// console.log("renderer runs as soon as page loads")
// => { desktop: true }
// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


if(getOS() === "macos"){
    console.log("mac here")
}

// added this to handle the DOM manipulation in the renderer process
// const { ipcRenderer } = require('electron');
// ipcRenderer.on('change-color', (event, color) => {
//     document.getElementById('color-box').style.backgroundColor = color;
// });

document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === 'b') {
        console.log("working? ctrl+b")
    const title = document.getElementById('color-box');
    title.style.color = title.style.color === 'blue' ? 'black' : 'blue';
}
});

function getOS() {
    let userAgent = window.navigator.userAgent.toLowerCase(),
    macosPlatforms = /(macintosh|macintel|macppc|mac68k|macos)/i,
    windowsPlatforms = /(win32|win64|windows|wince)/i,
    iosPlatforms = /(iphone|ipad|ipod)/i,
    os = null;

    if (macosPlatforms.test(userAgent)) {
    os = "macos";
    } else if (iosPlatforms.test(userAgent)) {
    os = "ios";
    } else if (windowsPlatforms.test(userAgent)) {
    os = "windows";
    } else if (/android/.test(userAgent)) {
    os = "android";
    } else if (!os && /linux/.test(userAgent)) {
    os = "linux";
    }

    return os;
}

