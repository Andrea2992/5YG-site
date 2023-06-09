(function() {

    var selectedAlbumIndex;
    var leftElemAlbum = $('.elem-album-sx img');
    var rightElemAlbum = $('.elem-album-dx img');
    var centerElemAlbum = $('.elem-album-cn img');
    var albumTitle = $('.album-title');

    if (window.innerWidth < 960) {
        selectedAlbumIndex = 0;
    } else {
        selectedAlbumIndex = 1;
    }

    var albumsCover = foto.map(function(f) {
        return f.albumSrc;
    });
    var albumsTitle = foto.map(function(f) {
        return f.albumTitle;
    });

    if (window.innerWidth < 960) {
        leftElemAlbum.attr({
            'src': albumsCover[albumsCover.length - 1],
            'alt':  albumsTitle[albumsCover.length - 1]
        });
        centerElemAlbum.attr({
            'src': albumsCover[selectedAlbumIndex],
            'alt':  albumsTitle[selectedAlbumIndex]
        });
        rightElemAlbum.attr({
            'src': albumsCover[selectedAlbumIndex + 1],
            'alt':  albumsTitle[selectedAlbumIndex + 1]
        });
        albumTitle.html(albumsTitle[selectedAlbumIndex])
    } else {
        leftElemAlbum.attr({
            'src': albumsCover[selectedAlbumIndex - 1],
            'alt':  albumsTitle[selectedAlbumIndex - 1]
        });
        centerElemAlbum.attr({
            'src': albumsCover[selectedAlbumIndex],
            'alt':  albumsTitle[selectedAlbumIndex]
        });
        rightElemAlbum.attr({
            'src': albumsCover[selectedAlbumIndex + 1],
            'alt':  albumsTitle[selectedAlbumIndex + 1]
        });
        albumTitle.html(albumsTitle[selectedAlbumIndex])
    }

    $('.freccia-album-left').on('click', function() {
        var currentAlbumIndex;
        if (selectedAlbumIndex == 1) {
            currentAlbumIndex = selectedAlbumIndex - 1;
            leftElemAlbum.attr({
                'src': albumsCover[albumsCover.length - 1],
                'alt':  albumsTitle[albumsCover.length - 1]
            });
            centerElemAlbum.attr({
                'src': albumsCover[currentAlbumIndex],
                'alt':  albumsTitle[currentAlbumIndex]
            });
            rightElemAlbum.attr({
                'src': albumsCover[currentAlbumIndex + 1],
                'alt':  albumsTitle[currentAlbumIndex + 1]
            });
            albumTitle.html(albumsTitle[currentAlbumIndex])            
        } else if (selectedAlbumIndex == 0) {
            currentAlbumIndex = albumsCover.length - 1;
            leftElemAlbum.attr({
                'src': albumsCover[currentAlbumIndex - 1],
                'alt':  albumsTitle[currentAlbumIndex - 1]
            });
            centerElemAlbum.attr({
                'src': albumsCover[currentAlbumIndex],
                'alt':  albumsTitle[currentAlbumIndex]
            });
            rightElemAlbum.attr({
                'src': albumsCover[0],
                'alt':  albumsTitle[0]
            });
            albumTitle.html(albumsTitle[currentAlbumIndex])
        } else {
            currentAlbumIndex = selectedAlbumIndex - 1;
            leftElemAlbum.attr({
                'src': albumsCover[currentAlbumIndex - 1],
                'alt':  albumsTitle[currentAlbumIndex - 1]
            });
            centerElemAlbum.attr({
                'src': albumsCover[currentAlbumIndex],
                'alt':  albumsTitle[currentAlbumIndex]
            });
            rightElemAlbum.attr({
                'src': albumsCover[currentAlbumIndex + 1],
                'alt':  albumsTitle[currentAlbumIndex + 1]
            });
            albumTitle.html(albumsTitle[currentAlbumIndex])    
        }
        selectedAlbumIndex = currentAlbumIndex;
        fotoAdapt();
    });

    $('.freccia-album-right').on('click', function() {
        var currentAlbumIndex;
        if (selectedAlbumIndex < albumsCover.length - 2) {
            currentAlbumIndex = selectedAlbumIndex + 1;
            leftElemAlbum.attr({
                'src': albumsCover[currentAlbumIndex - 1],
                'alt':  albumsTitle[currentAlbumIndex - 1]
            });
            centerElemAlbum.attr({
                'src': albumsCover[currentAlbumIndex],
                'alt':  albumsTitle[currentAlbumIndex]
            });
            rightElemAlbum.attr({
                'src': albumsCover[currentAlbumIndex + 1],
                'alt':  albumsTitle[currentAlbumIndex + 1]
            });
            albumTitle.html(albumsTitle[currentAlbumIndex])            
        } else if (selectedAlbumIndex == albumsCover.length - 2) {
            currentAlbumIndex = selectedAlbumIndex + 1;
            leftElemAlbum.attr({
                'src': albumsCover[currentAlbumIndex - 1],
                'alt':  albumsTitle[currentAlbumIndex - 1]
            });
            centerElemAlbum.attr({
                'src': albumsCover[currentAlbumIndex],
                'alt':  albumsTitle[currentAlbumIndex]
            });
            rightElemAlbum.attr({
                'src': albumsCover[0],
                'alt':  albumsTitle[0]
            });
            albumTitle.html(albumsTitle[currentAlbumIndex])
        } else {
            currentAlbumIndex = 0;
            leftElemAlbum.attr({
                'src': albumsCover[albumsCover.length - 1],
                'alt':  albumsTitle[albumsCover.length - 1]
            });
            centerElemAlbum.attr({
                'src': albumsCover[currentAlbumIndex],
                'alt':  albumsTitle[currentAlbumIndex]
            });
            rightElemAlbum.attr({
                'src': albumsCover[currentAlbumIndex + 1],
                'alt':  albumsTitle[currentAlbumIndex + 1]
            });
            albumTitle.html(albumsTitle[currentAlbumIndex])    
        }
        selectedAlbumIndex = currentAlbumIndex;
        fotoAdapt();
    });    



}())