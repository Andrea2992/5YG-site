(function() {
    var body = $(document.body);
    var menu = $('#menu');
    var navBar = $('#navBar');
    var header = $('#header');
    var navLargeScreen = $('#navLargeScreen');
    var navSmallScreen = $('#navSmallScreen');
    var scrollTimeout;


    function toggleNoScroll() {
        if (menu.hasClass('hide')) {
            body.removeClass('no-scroll')
        } else {
            body.addClass('no-scroll')
        }
    }

    const menuElem = document.querySelector('#menu');
    const menuObserver = new MutationObserver(toggleNoScroll);
    menuObserver.observe(menuElem, {attributeFilter: ['class']})

    function manageHeaderVisibility() {
        var isUnder600px = window.matchMedia("(max-width: 599.98px)").matches;
        var smallDevicesOnPortrait = isPortrait() & isUnder600px;
        var isUnder960px = window.matchMedia("(max-width: 959.98px)").matches;
        var smallDevicesOnLandscape = isLandscape() & isUnder960px;
        var isMenuHidden = menu.hasClass('hide');
        if ((smallDevicesOnPortrait || smallDevicesOnLandscape) & isMenuHidden) {
            header.removeClass('header-on-scroll');
            header.addClass('header-scroll-end');
        }
    }
    
    function toggleMenuVisibility() {
        if (menu.hasClass('hide')) {
            menu.removeClass('hide');
        } else {
            menu.addClass('hide');
        }
    }

    function closeFullNav() {
        menu.addClass('hide');
    }

    navBar.on('click', function() {
        toggleMenuVisibility();
        manageHeaderVisibility();
    })

    navSmallScreen.on('click', closeFullNav);
    menu.on('click', closeFullNav);

    if (isMediumScreen()) {
        navLargeScreen.addClass('hide');
    }

    window.addEventListener('resize', function() {
        if (isMediumScreen()) {
            if (!navLargeScreen.hasClass('hide')) {
                navLargeScreen.addClass('hide');
            }
        } else {
            if (navLargeScreen.hasClass('hide')) {
                navLargeScreen.removeClass('hide');
            }
        }
        if (!isMediumScreen() & !menu.hasClass('hide')) {
            menu.addClass('hide');
        }
    })
    
    window.addEventListener('scroll', function() {
        header.addClass('header-on-scroll');
        header.removeClass('header-scroll-end');
    })

    window.addEventListener('scrollend', function() {
        var menu = $('#menu');
        clearTimeout(scrollTimeout);                 
        scrollTimeout = setTimeout(function() {      
            if (menu.hasClass('hide')) {
                header.addClass('header-scroll-end');
                header.removeClass('header-on-scroll');
                }
        }, 1200);            
        
    })
    

}())
