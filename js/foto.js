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
            valueText = value.toString() + 'px'
            leftArrow.css({'top': valueText});
            rightArrow.css({'top': valueText});
        });
    }

    function elemWidth() {
        var elemSx = $('.elem-album-sx');
        var elemDx = $('.elem-album-dx');
        var elemCn = $('.elem-album-cn');
        var widthElemSx = elemSx.width();
        var widthElemDx = elemDx.width();
        var widthElemCn = elemCn.width();
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




    elemWidth();
    centerArrow();

}())