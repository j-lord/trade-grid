
// console.log("renderer runs as soon as page loads")
// => { desktop: true }
// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


if(getOS() === "macos"){
    console.log("mac here")
}


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

