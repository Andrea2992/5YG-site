(function() {
    var body = $(document.body);
    var menu = $('#menu');
    var $navBar = $('#navBar');
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
    const menuJava = document.querySelector('#menu');
    const menuObserver = new MutationObserver(toggleNoScroll);
    menuObserver.observe(menuJava, {attributeFilter: ['class']})

    
    $navBar.on('click', function() {
        toggleVisibility();
        if (window.matchMedia("(orientation: portrait)").matches & window.matchMedia("(max-width: 599.98px)").matches & menu.hasClass('hide') || window.matchMedia("(orientation: landscape)").matches & window.matchMedia("(max-width: 959.98px)").matches & menu.hasClass('hide')) {
            header.removeClass('header-on-scroll');
            header.addClass('header-scroll-end');
        }
    })
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

    window.addEventListener('resize', function() {
        if (window.innerWidth < 960) {
            if (!navLargeScreen.hasClass('hide')) {
                navLargeScreen.addClass('hide');
            }
        } else {
            if (!menu.hasClass('hide')) {
                menu.addClass('hide');
            }
            if (navLargeScreen.hasClass('hide')) {
                navLargeScreen.removeClass('hide');
            }
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
