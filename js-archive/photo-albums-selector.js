(function() {
    var albums = $('.photo-section-album-covers-container');
    var albumsCover = fotoArchivio.map(function(f) {
        return f.albumSrc;
    });
    var albumsTitle = fotoArchivio.map(function(f) {
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
    album.eq(0).addClass('active-album-cover');
    album.eq(1).addClass('next-album-cover');
    album.eq(albumsCover.length - 1).addClass('previuos-album-cover');
}())