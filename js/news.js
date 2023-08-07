(function() {
    window.addEventListener('load', function(){
        if (window.innerWidth < 305) {
            $('#feed-container').css({'display': 'none'});
            $('.news-facebook-icon-container').css({'display': 'block'});
        } else {
            $('#feed-container').css({'display': 'block'});
            $('.news-facebook-icon-container').css({'display': 'none'});
        }
    })
}())