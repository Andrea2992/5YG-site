(function() {

    var elemGalleria = $('.foto-galleria');
    var widthElemGalleria = elemGalleria.width();
    elemGalleria.css ({'height': widthElemGalleria / 2});
           
    function centerNavigateArrows() {
        var navigateLeft = $('.navigate-left');
        var navigateRight = $('.navigate-right');
        var heightFotoGalleria = $('.foto-galleria').height();
        var topValue = (heightFotoGalleria / 2) - 20;
        navigateLeft.css({'top': topValue});
        navigateRight.css({'top': topValue});
        window.addEventListener('resize', function() {
            var heightFotoGalleria = $('.foto-galleria').height();
            var topValue = (heightFotoGalleria / 2) - 20;
            navigateLeft.css({'top': topValue});
            navigateRight.css({'top': topValue});
        })
    }
    centerNavigateArrows();

    window.addEventListener('resize', function() {
        var elemGalleria = $('.foto-galleria');
        var widthElemGalleria = elemGalleria.width();
        elemGalleria.css ({'height': widthElemGalleria / 2});
    });


}())