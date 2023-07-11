(function() {
    var albums = $('.items');
    var albumsCover = foto.map(function(f) {
        return f.albumSrc;
    });
    var albumsTitle = foto.map(function(f) {
        return f.albumTitle;
    });
    for (var i = 0; i < albumsCover.length; i++) {
        var albumElem = $('<div></div>');
        albumElem.addClass('item');
        var albumImg = $('<img>');
        albumImg.attr({                         
            'src': albumsCover[i],                      
            'alt': albumsTitle[i]            
          });
        albumElem.append(albumImg);
        albums.append(albumElem);
    }
    var album = $('.item');
    album.eq(0).addClass('active');
    album.eq(1).addClass('next');
    album.eq(albumsCover.length - 1).addClass('prev');
}())