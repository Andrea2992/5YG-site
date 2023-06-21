var indexPhoto = 0;
var arrayElements = [];
var elementsDiv = $('.photoAlbumDiv');
var elementsImgShowed = $('.foto-galleria div img');
elementsDiv.addClass('absolute height100 width100');
    
for (i = 0; i < elementsImgShowed.length; i++) {
    arrayElements.push(elementsImgShowed[i]);
}
var showedPhoto = arrayElements.filter(function(img) {
    return img.attributes[1].nodeValue !== "";
});
$showedPhoto = $(showedPhoto);
$showedPhoto.each(function() {
    if (this.width > this.height) {
        $(this).css('width', '100%');
        $(this).css('height', 'auto');
        $(this).css('margin', '0 auto');
    } else {
        $(this).css('height', '100%');
        $(this).css('width', 'auto');
        $(this).css('margin', '0 auto');
    }
});
elementsDiv.addClass('opacityZero');
elementsDiv.eq(0).removeClass('opacityZero');


function sliderAlbum() {
    indexPhoto = 0;
    arrayElements = [];
    for (i = 0; i < elementsImgShowed.length; i++) {
        arrayElements.push(elementsImgShowed[i]);
    }
    showedPhoto = arrayElements.filter(function(img) {
        return img.attributes[1].nodeValue !== "";
    });
    $showedPhoto = $(showedPhoto);
    $showedPhoto.each(function() {
        if (this.width > this.height) {
            $(this).css('width', '100%');
            $(this).css('height', 'auto');
            $(this).css('margin', '0 auto');
        } else {
            $(this).css('height', '100%');
            $(this).css('width', 'auto');
            $(this).css('margin', '0 auto');
        }
    });
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