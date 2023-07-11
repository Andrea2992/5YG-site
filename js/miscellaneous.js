(function() {
    var photoGalleryContainer = $('.foto-galleria');
    var photoGalleryContainerWidth = photoGalleryContainer.width();
    photoGalleryContainer.css ({'height': photoGalleryContainerWidth / 2});
           
    function centerNavigationArrows() {
        var navigateLeft = $('.navigate-left');
        var navigateRight = $('.navigate-right');
        var navigateLeftHeight = navigateLeft.height();
        var photoGalleryContainerHeight = $('.foto-galleria').height();
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

    function toggleFollowUs() {
        var supportUs = $('#supportUs');
        if (isMediumScreen()) {
            supportUs.removeClass('block').addClass('hide');
        } else {
            supportUs.removeClass('hide').addClass('block');
        }
    }

    function configureBioMemberContainerHeight() {
        var bandMemberBioContainer = $('#panels div.component-panel');
        var bandMemberBioContainerWidth = bandMemberBioContainer.width();
        var isBetween600And959px = window.matchMedia("(min-width: 600px)").matches & window.matchMedia("(max-width: 959px)").matches;
        if (isLandscape() & isBetween600And959px) {
            bandMemberBioContainer.css({'height': bandMemberBioContainerWidth / 4.5})     
        } else if (window.innerWidth < 360) {
            bandMemberBioContainer.css({'height': bandMemberBioContainerWidth / 1.2})    
        } else if (window.innerWidth < 500) {
            bandMemberBioContainer.css({'height': bandMemberBioContainerWidth / 2})    
        } else if (isMediumScreen()) {
            bandMemberBioContainer.css({'height': bandMemberBioContainerWidth / 3})
        } else {
            bandMemberBioContainer.css({'height': bandMemberBioContainerWidth / 6})
        }
    }

    var bodyElem = document.querySelector('body');
    const bodyObserver = new ResizeObserver(entries => {
        centerNavigationArrows();
        toggleFollowUs();
        configureBioMemberContainerHeight();
    });
    bodyObserver.observe(bodyElem); 

    window.addEventListener('resize', function() {
        var photoGalleryContainer = $('.foto-galleria');
        var photoGalleryContainerWidth = photoGalleryContainer.width();
        photoGalleryContainer.css ({'height': photoGalleryContainerWidth / 2});
    });
}())