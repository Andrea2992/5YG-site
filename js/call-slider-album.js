var indexPhoto = 0;
var elementsDiv = $('.photoAlbumDiv');
var elementsImgShowed = $('.foto-galleria div img');

function sliderAlbum() {
    indexPhoto = 0;
    var arrayElements = [];
    for (i = 0; i < elementsImgShowed.length; i++) {
        arrayElements.push(elementsImgShowed[i]);
    }
    showedPhoto = arrayElements.filter(function(img) {
        return img.attributes[1].nodeValue !== "";
    });
    $showedPhoto = $(showedPhoto);
    elementsDiv.removeClass('opacityZero');
    elementsDiv.addClass('opacityZero');
    elementsDiv.eq(indexPhoto).removeClass('opacityZero');
}


$('.navigate-left').on('click', function() {
    var newIndexPhoto = indexPhoto > 0 ? indexPhoto -1 : showedPhoto.length - 1;
    gotoNumber(newIndexPhoto)
});
$('.navigate-right').on('click', function() {
    var newIndexPhoto = indexPhoto < showedPhoto.length - 1 ? indexPhoto + 1 : 0;
    gotoNumber(newIndexPhoto)
});


function gotoNumber(number) {
    indexPhoto = number;
    elementsDiv.removeClass('opacityZero');
    elementsDiv.addClass('opacityZero');
    elementsDiv.eq(number).removeClass('opacityZero');
}