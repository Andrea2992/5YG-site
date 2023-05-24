(function() {
    
    var menu = $('#menu');
    var nav = $('#nav');
    var $window = $(window);
    var $navBar = $('#navBar');
    
    function closeFullNav() {
        menu.removeClass('show').addClass('hide');
            $('#navList').removeClass('textAlignLeft').addClass('textAlignRight');
            $('#navList').children().removeClass('block').addClass('inlineBlock');
    }

    function toggleVisibility() {
        if (menu.attr('class') === 'hide') {
            menu.removeClass('hide').addClass('show');
            $('#navList').removeClass('textAlignRight').addClass('textAlignLeft');
            $('#navList').children().removeClass('inlineBlock').addClass('block');
        } else {
            menu.removeClass('show').addClass('hide');
            $('#navList').removeClass('textAlignLeft').addClass('textAlignRight');
            $('#navList').children().removeClass('block').addClass('inlineBlock');
        }
    }

    if (window.innerWidth < 960) {
        nav.detach();
        nav.addClass('navFullScreen');
        menu.append(nav);
        $navBar.on('click', toggleVisibility);
        nav.on('click', closeFullNav);
    }

    $window.on('resize', function() {
        if (window.innerWidth < 960) {
            if (nav.hasClass('navFullScreen')) {
                /***empty***/
            } else {
                nav.detach();
                menu.append(nav);
                nav.addClass('navFullScreen');
                var navEvent = $._data(document.getElementById('nav'), "events");
                if (navEvent) {
                    /***empty***/
                } else {
                    nav.on('click', closeFullNav);
                    $navBar.on('click', toggleVisibility);
                }
            }
        } else {
            if (nav.hasClass('navFullScreen')) {
                nav.detach();
                $('#header').append(nav);
                nav.removeClass('navFullScreen');
                if (menu.hasClass('show')) {
                    menu.removeClass('show').addClass('hide');
                    $('#navList').removeClass('textAlignLeft').addClass('textAlignRight');
                    $('#navList').children().removeClass('block').addClass('inlineBlock');
                }
            } else {
                /***empty***/
            }
            
        }
    })




}())
