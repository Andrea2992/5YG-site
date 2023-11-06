function detectScroll() {
    var arrowScrollLeft = $('.detect-left-scroll-container');
    var arrowScrollRight = $('.detect-right-scroll-container');
    $('#band-members-list').scroll(function () {
        var $width = $('#band-members-list').width();
        var $scrollWidth = $('#band-members-list')[0].scrollWidth;
        var $scrollLeft = $('#band-members-list').scrollLeft();
        if ($scrollWidth - Math.ceil($width) - $scrollLeft <= 1) {
            arrowScrollLeft.removeClass('visibility-hidden');
            arrowScrollRight.addClass('visibility-hidden');
        } else if ($scrollLeft === 0) {
            arrowScrollRight.removeClass('visibility-hidden');
            arrowScrollLeft.addClass('visibility-hidden');
        } else {
            arrowScrollLeft.removeClass('visibility-hidden');
            arrowScrollRight.removeClass('visibility-hidden');
        }
    });
};

detectScroll();