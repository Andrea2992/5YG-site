(function() {

    var selectedAlbumIndex = 0;
    var leftElemAlbum = $('.elem-album-sx img');
    var rightElemAlbum = $('.elem-album-dx img');
    var centerElemAlbum = $('.elem-album-cn img');
    var albumTitle = $('.album-title');

    function showAlbum() {
        
    };

    var albumsCover = foto.map(function(f) {
        return f.albumSrc;
    });
    var albumsTitle = foto.map(function(f) {
        return f.albumTitle;
    });
    
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
    albumTitle.html(albumsTitle[selectedAlbumIndex]);

    function changeAlbumCoverImages(leftIndex, centerIndex, rightIndex) {
        leftElemAlbum.attr({
            'src': albumsCover[leftIndex],
            'alt':  albumsTitle[leftIndex]
        });
        centerElemAlbum.attr({
            'src': albumsCover[centerIndex],
            'alt':  albumsTitle[centerIndex]
        });
        rightElemAlbum.attr({
            'src': albumsCover[rightIndex],
            'alt':  albumsTitle[rightIndex]
        });
    }

    $('.freccia-album-left').on('click', function() {
        var currentAlbumIndex;
        if (selectedAlbumIndex == 1) {
            currentAlbumIndex = selectedAlbumIndex - 1;
            var leftIndex = albumsCover.length - 1;
            var centerIndex = currentAlbumIndex;
            var rightIndex = currentAlbumIndex + 1;
            changeAlbumCoverImages(leftIndex, centerIndex, rightIndex);
            albumTitle.html(albumsTitle[currentAlbumIndex]);            
        } else if (selectedAlbumIndex == 0) {
            currentAlbumIndex = albumsCover.length - 1;
            var leftIndex = currentAlbumIndex - 1;
            var centerIndex = currentAlbumIndex;
            var rightIndex = 0;
            changeAlbumCoverImages(leftIndex, centerIndex, rightIndex);
            albumTitle.html(albumsTitle[currentAlbumIndex])
        } else {
            currentAlbumIndex = selectedAlbumIndex - 1;
            var leftIndex = currentAlbumIndex - 1;
            var centerIndex = currentAlbumIndex;
            var rightIndex = currentAlbumIndex + 1;
            changeAlbumCoverImages(leftIndex, centerIndex, rightIndex);
            albumTitle.html(albumsTitle[currentAlbumIndex])    
        }
        selectedAlbumIndex = currentAlbumIndex;
        fotoAdapt();
        showAlbum();
    });

    $('.freccia-album-right').on('click', function() {
        var currentAlbumIndex;
        if (selectedAlbumIndex < albumsCover.length - 2) {
            currentAlbumIndex = selectedAlbumIndex + 1;
            var leftIndex = currentAlbumIndex - 1;
            var centerIndex = currentAlbumIndex;
            var rightIndex = currentAlbumIndex + 1;
            changeAlbumCoverImages(leftIndex, centerIndex, rightIndex);
            albumTitle.html(albumsTitle[currentAlbumIndex])            
        } else if (selectedAlbumIndex == albumsCover.length - 2) {
            currentAlbumIndex = selectedAlbumIndex + 1;
            var leftIndex = currentAlbumIndex - 1;
            var centerIndex = currentAlbumIndex;
            var rightIndex = 0;
            changeAlbumCoverImages(leftIndex, centerIndex, rightIndex);
            albumTitle.html(albumsTitle[currentAlbumIndex])
        } else {
            currentAlbumIndex = 0;
            var leftIndex = albumsCover.length - 1;
            var centerIndex = currentAlbumIndex;
            var rightIndex = currentAlbumIndex + 1;
            changeAlbumCoverImages(leftIndex, centerIndex, rightIndex);
            albumTitle.html(albumsTitle[currentAlbumIndex])    
        }
        selectedAlbumIndex = currentAlbumIndex;
        fotoAdapt();
        showAlbum();
    });    





}())