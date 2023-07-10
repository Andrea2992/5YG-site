function isMediumScreen() {
    return window.innerWidth < 960;
}

function isLandscape() {
    return window.matchMedia("(orientation: landscape)").matches;
}

function isPortrait() {
    return window.matchMedia("(orientation: portrait)").matches;
}