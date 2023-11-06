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

    function toggleFollowUs() {
        var supportUs = $('#support-us-banner');
        if (isMediumScreen()) {
            supportUs.removeClass('block').addClass('hide');
        } else {
            supportUs.removeClass('hide').addClass('block');
        }
    }

    function configureBioMemberContainerHeight() {
        var bandMemberBioContainer = $('#members-bio-container div.member-bio');
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

    function configureDetectScroll() {
        var arrowScrollLeft = $('.detect-left-scroll-container');
        var arrowScrollRight = $('.detect-right-scroll-container');
        var isUnder839px = window.matchMedia("(max-width: 839px)").matches;
        var isUnder1279px = window.matchMedia("(max-width: 1279px)").matches;
        var pointerCoarse = window.matchMedia("(pointer:coarse)").matches;
        if (window.innerWidth > 1280) {
            arrowScrollLeft.removeClass('z-index100');
            arrowScrollRight.removeClass('z-index100')
            arrowScrollLeft.addClass('negative-index');
            arrowScrollRight.addClass('negative-index');
        } else if (isUnder839px & isPortrait() & pointerCoarse || isUnder1279px & isLandscape() & pointerCoarse) {
            arrowScrollLeft.removeClass('negative-index');
            arrowScrollRight.removeClass('negative-index');
            arrowScrollLeft.addClass('z-index100');
            arrowScrollRight.addClass('z-index100');
        }
    }

    var bodyElem = document.querySelector('body');
    const bodyObserver = new ResizeObserver(entries => {
        centerNavigationArrows();
        toggleFollowUs();
        configureBioMemberContainerHeight();
        configureDetectScroll();
    });
    bodyObserver.observe(bodyElem); 

    window.addEventListener('resize', function() {
        var photoGalleryContainer = $('.photo-gallery');
        var photoGalleryContainerWidth = photoGalleryContainer.width();
        photoGalleryContainer.css ({'height': photoGalleryContainerWidth / 2});
    });
}())