var indexPhoto = 0;



function getShowedPhoto() {
    var elementsImgShowed = $('.foto-galleria div img');
    var arrayElements = [];
    for (i = 0; i < elementsImgShowed.length; i++) {
        arrayElements.push(elementsImgShowed[i]);
    }
    return arrayElements.filter(function(img) {
        return img.attributes[1].nodeValue !== "";
    });
}

function sliderAlbum() {
    indexPhoto = 0;
    var elementsDiv = $('.photoAlbumDiv');
    var showedPhoto = getShowedPhoto();
    $showedPhoto = $(showedPhoto);
    $showedPhoto.each(function() {
        $(this).removeClass('hide').addClass('block');
    })
    elementsDiv.removeClass('opacityZero');
    elementsDiv.addClass('opacityZero');
    elementsDiv.eq(indexPhoto).removeClass('opacityZero');
}


$('.navigate-left').on('click', function() {
    var showedPhoto = getShowedPhoto();
    var newIndexPhoto = indexPhoto > 0 ? indexPhoto -1 : showedPhoto.length - 1;
    gotoNumber(newIndexPhoto)
});
$('.navigate-right').on('click', function() {
    var showedPhoto = getShowedPhoto();
    var newIndexPhoto = indexPhoto < showedPhoto.length - 1 ? indexPhoto + 1 : 0;
    gotoNumber(newIndexPhoto)
});


function gotoNumber(number) {
    indexPhoto = number;
    var elementsDiv = $('.photoAlbumDiv');
    elementsDiv.removeClass('opacityZero');
    elementsDiv.addClass('opacityZero');
    elementsDiv.eq(number).removeClass('opacityZero');
}