const slider = document.querySelector(".items");
const slides = document.querySelectorAll(".item");
const button = document.querySelectorAll(".button");
var cacheImg = {};

let current = 0;
let prev = slides.length - 1;
let next = 1;

var albumsCover = foto.map(function(f) {
    return f.albumSrc;
});
var albumsTitle = foto.map(function(f) {
    return f.albumTitle;
});
var albumsPhotos = foto.map(function(f) {
    return f.fotoSrc;
})

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


var imageIds = [];

function createImgElemForAlbum() {
    var albumsPhotosLength = albumsPhotos.map(function(album) {
        return album.length;
    });
    var maxImagesNum = Math.max(...albumsPhotosLength);
    var divFotoGalleria = $('#foto-galleria');
    for (var i = 0; i < maxImagesNum; i++) {
        var div = $('<div></div>');
        div.addClass('photoAlbumDiv')
        var imgItem = $('<img>');
        var id = 'album-image-' + i;
        imgItem.attr('id', id);
        div.append(imgItem);
        divFotoGalleria.append(div);
        imageIds.push(id)
    }

}

createImgElemForAlbum();

function unloadImages() {
    $('#foto-galleria div img').attr({                          
            'src': '',                         
            'alt': ''             
          }).addClass('hide');
}

function showLoader() {
  $('#container-photos-loader').addClass('container-photos-loader');
    $('#photos-loader').addClass('photos-loader');
    $('#foto-galleria button').addClass('hide');
}

function hideLoader() {
    $('#container-photos-loader').removeClass('container-photos-loader');
    $('#photos-loader').removeClass('photos-loader');
    $('#foto-galleria button').removeClass('hide');
}

function addToCache(albumIndex) {
    var selectedPhotos = albumsPhotos[albumIndex]
    var albumSrcKey = albumsCover[albumIndex]
    if (!cacheImg[albumSrcKey]) {
        cacheImg[albumSrcKey] = [];
    }
    for (var i = 0; i < selectedPhotos.length; i++) {
         var currentPhoto = selectedPhotos[i]
     
        var alreadyInCache = cacheImg[albumSrcKey].find(function(photo) {
            return photo.src == currentPhoto.src;
        })
        if (!alreadyInCache) {
            var photoElement = {
                 src: currentPhoto.src,
                 alt: currentPhoto.alt,
                 isLoading: true,
                 index: i
             }
            cacheImg[albumSrcKey].push(photoElement);

        }
    }
}

function listenToLoadEvent(albumIndex) {
    var albumSrcKey = albumsCover[albumIndex];
    var cachedAlbumPhotos = cacheImg[albumSrcKey];
    var notLoadedPhotos = cachedAlbumPhotos.filter(function(photo) {
        return photo.isLoading == true;
    });
    var loadedPhotos = cachedAlbumPhotos.filter(function(photo) {
        return photo.isLoading == false;
    });
    for (var i = 0; i < loadedPhotos.length; i++) {
        var photoIndex = loadedPhotos[i].index;
        var imageId = imageIds[photoIndex];
        $('#' + imageId).attr({                          
            'src': loadedPhotos[i].src,                         
            'alt': loadedPhotos[i].alt             
          }).removeClass('hide').addClass('block');
    }
    for (var i = 0; i < notLoadedPhotos.length; i++) {
        var photoIndex = notLoadedPhotos[i].index;
        var imageId = imageIds[photoIndex];
        $('#' + imageId).on('load', function() {
            var thisELemId = $(this).attr('src');
            var elementInCache = cacheImg[albumSrcKey].find(function(photo) {
            return photo.src == thisELemId;
            })
            if (elementInCache) {
                elementInCache.isLoading = false;
            }
            var allPhotoLoaded = cachedAlbumPhotos.every(function(photo) {
                return photo.isLoading == false;
            })
            if (allPhotoLoaded) {
                hideLoader();
            }
        })
        $('#' + imageId).attr({                          
            'src': notLoadedPhotos[i].src,                         
            'alt': notLoadedPhotos[i].alt             
        }).removeClass('hide').addClass('block');
    }
    //chiamare slider
}

function loadAlbumImages(albumIndex) {
    unloadImages();
    addToCache(albumIndex);
    var albumSrcKey = albumsCover[albumIndex];
    var cachedAlbumPhotos = cacheImg[albumSrcKey];
    var stillLoadingPhoto = cachedAlbumPhotos.some(function(photo) {
        return photo.isLoading == true;
    })
    if (stillLoadingPhoto) {
        showLoader();
    }
    listenToLoadEvent(albumIndex);    
}

   


loadAlbumImages(0);



const goToPrev = function() {
    var newCenterIndex  = current > 0 ? current - 1 : slides.length - 1;
    gotoNum(newCenterIndex);
    loadAlbumImages(newCenterIndex);
    sliderAlbum()
}

const goToNext = function() {
    var newCenterIndex = current < slides.length - 1 ? current + 1 : 0;
    gotoNum(newCenterIndex);
    loadAlbumImages(newCenterIndex);
    sliderAlbum()
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


