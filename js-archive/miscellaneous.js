(function() {
    var photoGalleryContainer = $('.photo-gallery');
    var photoGalleryContainerWidth = photoGalleryContainer.width();
    photoGalleryContainer.css ({'height': photoGalleryContainerWidth / 2});
           
    function centerNavigationArrows() {
        var navigateLeft = $('.photo-navigate-left');
        var navigateRight = $('.photo-navigate-right');
        var navigateLeftHeight = navigateLeft.height();
        var photoGalleryContainerHeight = $('.photo-gallery').height();
        var isUnder700px = window.matchMedia("(max-width: 700px)").matches; 
        if (isPortrait() & isUnder700px) {
            navigateLeft.css({'top': photoGalleryContainerHeight + 30});
            navigateRight.css({'top': photoGalleryContainerHeight + 30});
        } else {
            var halfNavigateLeft = navigateLeftHeight / 2;
            var halfPhotoGalleryContainer = photoGalleryContainerHeight / 2;
            var topValue = halfPhotoGalleryContainer - halfNavigateLeft;
            navigateLeft.css({'top': topValue});
            navigateRight.css({'top': topValue});
        }
    }
    centerNavigationArrows()

    var bodyElem = document.querySelector('body');
    const bodyObserver = new ResizeObserver(entries => {
        centerNavigationArrows();
    });
    bodyObserver.observe(bodyElem); 

    window.addEventListener('resize', function() {
        var photoGalleryContainer = $('.photo-gallery');
        var photoGalleryContainerWidth = photoGalleryContainer.width();
        photoGalleryContainer.css ({'height': photoGalleryContainerWidth / 2});
    });
}())