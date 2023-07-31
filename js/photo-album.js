const photos = document.querySelectorAll(".item");
const photoAlbumButtons = document.querySelectorAll(".button");
var cacheImg = {};
var cachedAlbumPhotos;
let currentPhotoAlbum = 0;
let prevPhotoAlbum = photos.length - 1;
let nextPhotoAlbum = 1;

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

function resizeCoverAlbum(height) {
    var item = $('.item');
    item.css({'height': height});
}

var firstPhoto = document.querySelector('.item');
const coverAlbumObserver = new ResizeObserver(entries => {
    const albumCoverElement = entries[0];
    const width = albumCoverElement.contentRect.width;
    resizeCoverAlbum(width);
})
coverAlbumObserver.observe(firstPhoto);

for (let i = 0; i < photoAlbumButtons.length; i++) {
    photoAlbumButtons[i].addEventListener("click", () => i == 0 ? goToPrevAlbum() : goToNextAlbum());
}

var photoIds = [];

function createImgElemForAlbum() {
    var albumsPhotosLength = albumsPhotos.map(function(album) {
        return album.length;
    });
    var maxPhotoNum = Math.max(...albumsPhotosLength);
    var photoGalleryContainer = $('#foto-galleria');
    for (var i = 0; i < maxPhotoNum; i++) {
        var photoContainer = $('<div></div>');
        photoContainer.addClass('photoAlbumDiv absolute height-100 width-100')
        var imgElement = $('<img>');
        var imgElemId = 'album-image-' + i;
        imgElement.attr('id', imgElemId);
        photoContainer.append(imgElement);
        photoGalleryContainer.append(photoContainer);
        photoIds.push(imgElemId)
    }
}
createImgElemForAlbum();

function unloadImages() {
    $('#foto-galleria div img').attr({                          
            'src': '',                         
            'alt': ''             
          }).addClass('hide').removeClass('block');
}

function showLoader() {
  $('#container-photos-loader').addClass('container-photos-loader');
    $('#photos-loader').addClass('photos-loader');
    $('#foto-galleria button').addClass('hide');
    $('.photoAlbumDiv').css({'display': 'none'});
}

function hideLoader() {
    $('#container-photos-loader').removeClass('container-photos-loader');
    $('#photos-loader').removeClass('photos-loader');
    $('#foto-galleria button').removeClass('hide');
    $('.photoAlbumDiv').css({'display': 'block'});
}

function addToCache(albumIndex) {
    var selectedAlbumPhotos = albumsPhotos[albumIndex]
    var albumSrcKey = albumsCover[albumIndex]
    if (!cacheImg[albumSrcKey]) {
        cacheImg[albumSrcKey] = [];
    }
    for (var i = 0; i < selectedAlbumPhotos.length; i++) {
        var currentPhoto = selectedAlbumPhotos[i]
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

function onAllPhotosLoaded(albumIndex) {
    var albumSrcKey = albumsCover[albumIndex];
    cachedAlbumPhotos = cacheImg[albumSrcKey];
    var notLoadedPhotos = cachedAlbumPhotos.filter(function(photo) {
        return photo.isLoading == true;
    });
    var loadedPhotos = cachedAlbumPhotos.filter(function(photo) {
        return photo.isLoading == false;
    });
    for (var i = 0; i < loadedPhotos.length; i++) {
        var photoIndex = loadedPhotos[i].index;
        var imageId = photoIds[photoIndex];
        $('#' + imageId).attr({                          
            'src': loadedPhotos[i].src,                         
            'alt': loadedPhotos[i].alt             
          });
    }
    if (notLoadedPhotos.length == 0) {
        for (var i = 0; i < loadedPhotos.length; i++) {
            var photoIndex = loadedPhotos[i].index;
            var imageId = photoIds[photoIndex];
            $('#' + imageId).removeClass('hide').addClass('block');
        }
    }
    for (var i = 0; i < notLoadedPhotos.length; i++) {
        var photoIndex = notLoadedPhotos[i].index;
        var imageId = photoIds[photoIndex];
        $('#' + imageId).on('load', function() {
            var thisELemId = $(this).attr('src');
            var elementInCache = cachedAlbumPhotos.find(function(photo) {
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
                configurePhotoVisibility();
            }
        })
        $('#' + imageId).attr({                          
            'src': notLoadedPhotos[i].src,                         
            'alt': notLoadedPhotos[i].alt             
        });
    }
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
    onAllPhotosLoaded(albumIndex);    
}
loadAlbumImages(0);

const goToPrevAlbum = function() {
    var newCenterIndex  = currentPhotoAlbum > 0 ? currentPhotoAlbum - 1 : photos.length - 1;
    selectAlbum(newCenterIndex);
    loadAlbumImages(newCenterIndex);
}

const goToNextAlbum = function() {
    var newCenterIndex = currentPhotoAlbum < photos.length - 1 ? currentPhotoAlbum + 1 : 0;
    selectAlbum(newCenterIndex);
    loadAlbumImages(newCenterIndex);
}

const selectAlbum = number => {
    currentPhotoAlbum = number;
    prevPhotoAlbum = currentPhotoAlbum - 1;
    nextPhotoAlbum = currentPhotoAlbum + 1;
    for (let i = 0; i < photos.length; i++) {
        photos[i].classList.remove("active");
        photos[i].classList.remove("prev");
        photos[i].classList.remove("next");
    }
    if (nextPhotoAlbum == photos.length) {
        nextPhotoAlbum = 0;
    }
    if (prevPhotoAlbum == -1) {
        prevPhotoAlbum = photos.length - 1;
    }
    photos[currentPhotoAlbum].classList.add("active");
    photos[prevPhotoAlbum].classList.add("prev");
    photos[nextPhotoAlbum].classList.add("next");
    albumTitle.html(albumsTitle[currentPhotoAlbum]);
}


