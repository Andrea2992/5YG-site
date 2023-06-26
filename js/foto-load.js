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
   
    var bodyElem = document.querySelector('body');
    const bodyObserver = new ResizeObserver(entries => {
        centerPhotoArrows()
    });
    bodyObserver.observe(bodyElem); 
    

    window.addEventListener('resize', function() {
        var elemGalleria = $('.foto-galleria');
        var widthElemGalleria = elemGalleria.width();
        elemGalleria.css ({'height': widthElemGalleria / 2});
    });


}())