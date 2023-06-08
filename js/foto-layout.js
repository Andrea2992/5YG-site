(function() {
    var $window = $(window);

    function centerArrow() {   
        var leftArrow = $('.freccia-album-left');
        var rightArrow = $('.freccia-album-right');
        var value;
        var valueText;
        var heightGalleria = $('.album-galleria').outerHeight();
        if (window.innerWidth < 300) {
            value = (heightGalleria / 2) - 22.5;
        } else if (window.innerWidth < 960) {
            value = (heightGalleria / 2) - 27.5;
        } else {
            value = (heightGalleria / 2) - 20;
        }
        valueText = value.toString() + 'px'
        leftArrow.css({'top': valueText});
        rightArrow.css({'top': valueText});

        $window.on('resize', function() {
            var heightGalleria = $('.album-galleria').outerHeight();
            if (window.innerWidth < 300) {
                value = (heightGalleria / 2) - 22.5;
            } else if (window.innerWidth < 960) {
                value = (heightGalleria / 2) - 27.5;
            } else {
                value = (heightGalleria / 2) - 20;
            }
            valueText = value + 'px'
            leftArrow.css({'top': valueText});
            rightArrow.css({'top': valueText});
        });
    }

    function centerNavigateArrows() {
        var navigateLeft = $('.navigate-left');
        var navigateRight = $('.navigate-right');
        var heightFotoGalleria = $('.foto-galleria').height();
        var topValue = (heightFotoGalleria / 2) - 20;
        navigateLeft.css({'top': topValue});
        navigateRight.css({'top': topValue});

        $window.on('resize', function() {
            var heightFotoGalleria = $('.foto-galleria').height();
            var topValue = (heightFotoGalleria / 2) - 20;
            navigateLeft.css({'top': topValue});
            navigateRight.css({'top': topValue});
        })
    }

    function elemWidth() {
        var elemSx = $('.elem-album-sx');
        var elemDx = $('.elem-album-dx');
        var elemCn = $('.elem-album-cn');
        var elemGalleria = $('.foto-galleria');
        var widthElemSx = elemSx.width();
        var widthElemDx = elemDx.width();
        var widthElemCn = elemCn.width();
        var widthElemGalleria = elemGalleria.width();
        elemGalleria.css ({'height': widthElemGalleria / 2});
        if (window.innerWidth < 960) {
            var newWidthElemCn = widthElemCn / 1.4;
            elemCn.css({'height': newWidthElemCn});
        } else {
            elemSx.css({'height': widthElemSx});
            elemDx.css({'height': widthElemDx});
            elemCn.css({'height': widthElemCn});
        }

        $window.on('resize', function() {
            var widthElemSx = elemSx.width();
            var widthElemDx = elemDx.width();
            var widthElemCn = elemCn.width();
            var widthElemGalleria = elemGalleria.width();
            elemGalleria.css ({'height': widthElemGalleria / 2});
            if (window.innerWidth < 960) {
                var newWidthElemCn = widthElemCn / 1.4;
                elemCn.css({'height': newWidthElemCn});
            } else {
                elemSx.css({'height': widthElemSx});
                elemDx.css({'height': widthElemDx});
                elemCn.css({'height': widthElemCn});
            }
        });
    }

    function centraturaImg() {
        var imgGalleria = $('.album-galleria li img');
        imgGalleria.each(function() {
            if (this.width > this.height) {
            $(this).css('width', '100%');
            } else {
                $(this).css('height', '100%');
            }
        })
        imgGalleria.each(function() {
            $(this).css({
                'margin-left': -this.width / 2,
                'margin-top': -this.height / 2
            });
        })
        
        $window.on('resize', function() {
            imgGalleria.each(function() {
                if (this.width > this.height) {
                $(this).css('width', '100%');
                } else {
                    $(this).css('height', '100%');
                }
            })
            imgGalleria.each(function() {
                $(this).css({
                    'margin-left': -this.width / 2,
                    'margin-top': -this.height / 2
                });
            })
        })
    }

    elemWidth();
    centerArrow();
    centerNavigateArrows();
    centraturaImg();




    
}())