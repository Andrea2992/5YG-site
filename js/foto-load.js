(function() {

    var elemGalleria = $('.foto-galleria');
    var widthElemGalleria = elemGalleria.width();
    elemGalleria.css ({'height': widthElemGalleria / 2});
           
   
    function centerNavigateArrows() {
        var navigateLeft = $('.navigate-left');
        var navigateRight = $('.navigate-right');
        var heightFotoGalleria = $('.foto-galleria').height();
        var navLeftHeight = navigateLeft.height() / 2
        var topValue = (heightFotoGalleria / 2) - navLeftHeight;
        navigateLeft.css({'top': topValue});
        navigateRight.css({'top': topValue});
    }
    centerNavigateArrows();


    function centerPhotoArrows() {
        var navigateLeft = $('.navigate-left');
        var navigateRight = $('.navigate-right');
        var navigateLeftHeight = navigateLeft.height();
        var fotoGalleriaHeight = $('.foto-galleria').height();
        if (window.matchMedia("(orientation: portrait)").matches & window.matchMedia("(max-width: 700px)").matches) {
            navigateLeft.css({'top': fotoGalleriaHeight + 30});
            navigateRight.css({'top': fotoGalleriaHeight + 30});
        } else {
            var halfNavigateLeft = navigateLeftHeight / 2;
            var halfFotoGalleria = fotoGalleriaHeight / 2;
            var topValue = halfFotoGalleria - halfNavigateLeft;
            navigateLeft.css({'top': topValue});
            navigateRight.css({'top': topValue});
         
        }
    }
 
    function newsBallToggle() {
        var $supportUs = $('#supportUs');
        if (window.innerWidth < 960) {
            $supportUs.removeClass('block').addClass('hide');
        } else {
            $supportUs.removeClass('hide').addClass('block');
        }
    }

    function heightComponentPanel() {
        var panelsDiv = $('#panels div.component-panel');
        var panelsWidth = panelsDiv.width();
        if (window.matchMedia("(orientation: landscape)").matches & window.matchMedia("(min-width: 600px)").matches & window.matchMedia("(max-width: 959px)").matches) {
            panelsDiv.css({'height': panelsWidth / 4.5})     
        } else if (window.innerWidth < 360) {
            panelsDiv.css({'height': panelsWidth / 1.2})    
        } else if (window.innerWidth < 500) {
            panelsDiv.css({'height': panelsWidth / 2})    
        } else if (window.innerWidth < 960) {
            panelsDiv.css({'height': panelsWidth / 3})
        } else {
            panelsDiv.css({'height': panelsWidth / 6})
        }
    }

    var bodyElem = document.querySelector('body');
    const bodyObserver = new ResizeObserver(entries => {
        centerPhotoArrows();
        newsBallToggle();
        heightComponentPanel()
    });
    bodyObserver.observe(bodyElem); 
    

    window.addEventListener('resize', function() {
        var elemGalleria = $('.foto-galleria');
        var widthElemGalleria = elemGalleria.width();
        elemGalleria.css ({'height': widthElemGalleria / 2});
    });


}())