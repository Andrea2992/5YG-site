var currentVisiblePhotoIndex = 0;

function getShowedPhoto() {
    var $allPhotoElements = $('.foto-galleria div img');
    var allPhotoElements = [];
    for (i = 0; i < $allPhotoElements.length; i++) {
        allPhotoElements.push($allPhotoElements[i]);
    }
    return allPhotoElements.filter(function(img) {
        return img.attributes[1].nodeValue !== "";
    });
}

function configurePhotoVisibility() {
    var showedPhoto = getShowedPhoto();
    $showedPhoto = $(showedPhoto);
    $showedPhoto.each(function() {
        $(this).removeClass('hide').addClass('block');
    })
    showSelectedPhoto(0)
}

$('.navigate-left').on('click', function() {
    var showedPhoto = getShowedPhoto();
    var newVisiblePhotoIndex = currentVisiblePhotoIndex > 0 ? currentVisiblePhotoIndex -1 : showedPhoto.length - 1;
    showSelectedPhoto(newVisiblePhotoIndex)
});
$('.navigate-right').on('click', function() {
    var showedPhoto = getShowedPhoto();
    var newVisiblePhotoIndex = currentVisiblePhotoIndex < showedPhoto.length - 1 ? currentVisiblePhotoIndex + 1 : 0;
    showSelectedPhoto(newVisiblePhotoIndex)
});

function showSelectedPhoto(index) {
    currentVisiblePhotoIndex = index;
    var imageContainerElements = $('.photoAlbumDiv');
    imageContainerElements.removeClass('opacity-zero');
    imageContainerElements.addClass('opacity-zero');
    imageContainerElements.eq(index).removeClass('opacity-zero');
}