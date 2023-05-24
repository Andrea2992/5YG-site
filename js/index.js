(function() {
    
    var menu = $('#menu');
    var $navBar = $('#navBar');
    var navLargeScreen = $('#navLargeScreen');
    var navSmallScreen = $('#navSmallScreen');
    var $window = $(window);
    
    $navBar.on('click', toggleVisibility);
    navSmallScreen.on('click', closeFullNav);
    menu.on('click', closeFullNav);

    function toggleVisibility() {
        if (menu.hasClass('hide')) {
            menu.removeClass('hide');
        } else {
            menu.addClass('hide');
        }
    }

    function closeFullNav() {
        menu.addClass('hide');
    }

    if (window.innerWidth < 960) {
        navLargeScreen.addClass('hide');
    }

    $window.on('resize', function() {
        if (window.innerWidth < 960) {
            if (!navLargeScreen.hasClass('hide')) {
                navLargeScreen.addClass('hide');
            }
        } else {
            if (!menu.hasClass('hide')) {
                menu.addClass('hide');
            }
            if(navLargeScreen.hasClass('hide')) {
                navLargeScreen.removeClass('hide');
            }
        }
    })



}())
