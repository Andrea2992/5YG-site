(function() {
    var header = $('#header');
    var scrollTimeout;

    window.addEventListener('scroll', function () {
        if (!header.hasClass('header-on-scroll')) {
            header.addClass('header-on-scroll');
        }
        header.removeClass('header-scroll-end');
    })

    window.addEventListener('scrollend', function () {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function () {
            header.addClass('header-scroll-end');
            header.removeClass('header-on-scroll');
        }, 1200);

    })

}())
