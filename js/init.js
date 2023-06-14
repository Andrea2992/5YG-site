const slider = document.querySelector(".items");
const slides = document.querySelectorAll(".item");
const button = document.querySelectorAll(".button");

let current = 0;
let prev = slides.length - 1;
let next = 1;

var albumsCover = foto.map(function(f) {
    return f.albumSrc;
});
var albumsTitle = foto.map(function(f) {
    return f.albumTitle;
});

var albumTitle = $('.album-title');
    albumTitle.html(albumsTitle[0]);


function elemWidth() {
    var item = $('.item');
    var widthItem = item.width();
    item.css({'height': widthItem});
}

$(window).on('resize', function() {
    var item = $('.item');
    var widthItem = item.width();
    item.css({'height': widthItem});
});

elemWidth();



for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => i == 0 ? goToPrev() : goToNext());
}

function loadAlbumImages(albumIndex) {
    /*da scrivere*/
}

const goToPrev = function() {
    var newCenterIndex  = current > 0 ? current - 1 : slides.length - 1;
    gotoNum(newCenterIndex);
    loadAlbumImages(newCenterIndex);
}

const goToNext = function() {
    var newCenterIndex = current < slides.length - 1 ? current + 1 : 0;
    gotoNum(newCenterIndex);
    loadAlbumImages(newCenterIndex);
}

const gotoNum = number => {
    current = number;
    prev = current - 1;
    next = current + 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        slides[i].classList.remove("prev");
        slides[i].classList.remove("next");
    }

    if (next == slides.length) {
        next = 0;
    }

    if (prev == -1) {
        prev = slides.length - 1;
    }

    slides[current].classList.add("active");
    slides[prev].classList.add("prev");
    slides[next].classList.add("next");

    albumTitle.html(albumsTitle[current]);
}


