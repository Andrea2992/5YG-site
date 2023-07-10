(function() {

    
    window.addEventListener('load', function(){
        if (window.innerWidth < 305) {
            $('#feedContainer').css({'display': 'none'});
            $('.news-facebook-icon-container').css({'display': 'block'});
        } else {
            $('#feedContainer').css({'display': 'block'});
            $('.news-facebook-icon-container').css({'display': 'none'});
        }
    })
    

}())