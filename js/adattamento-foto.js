function fotoAdapt() {
    var imgGalleria = $('.album-galleria li img');
    imgGalleria.each(function() {
        if (this.width > this.height) {
            $(this).css('width', '100%');
            $(this).css('height', 'auto');
        } else {
            $(this).css('height', '100%');
            $(this).css('width', 'auto');
        }
    });
    imgGalleria.each(function() {
        $(this).css({
        'margin-left': -this.width / 2,
        'margin-top': -this.height / 2
    });

    });
}