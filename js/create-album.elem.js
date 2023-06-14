(function() {

    var divItem = $('.items');
    
    var albumsCover = foto.map(function(f) {
        return f.albumSrc;
    });
    var albumsTitle = foto.map(function(f) {
        return f.albumTitle;
    });

    for (var i = 0; i < albumsCover.length; i++) {
        var div = $('<div></div>');
        div.addClass('item');
        var imgItem = $('<img>');
        imgItem.attr({                         
            'src': albumsCover[i],                      
            'alt': albumsTitle[i]            
          });
        div.append(imgItem);
        divItem.append(div);
    }

    var item = $('.item');
    item.eq(0).addClass('active');
    item.eq(1).addClass('next');
    item.eq(albumsCover.length - 1).addClass('prev');

}())