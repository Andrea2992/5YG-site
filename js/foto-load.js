(function() {

    var selectedAlbumIndex = 0;/**VIA**/
    var leftElemAlbum = $('.elem-album-sx img');/**VIA**/
    var rightElemAlbum = $('.elem-album-dx img');/**VIA**/
    var centerElemAlbum = $('.elem-album-cn img');/**VIA**/
    var albumTitle = $('.album-title');/**RESTA**/

    function showAlbum() {/**VIA**/
        /**VIA**/
    };/**VIA**/

    var albumsCover = foto.map(function(f) {/**RESTA**/
        return f.albumSrc;/**RESTA**/
    });/**RESTA**/
    var albumsTitle = foto.map(function(f) {/**RESTA**/
        return f.albumTitle;/**RESTA**/
    });/**RESTA**/
    
    leftElemAlbum.attr({/**VIA**/
        'src': albumsCover[albumsCover.length - 1],/**VIA**/
        'alt':  albumsTitle[albumsCover.length - 1]/**VIA**/
    });/**VIA**/
    centerElemAlbum.attr({/**VIA**/
        'src': albumsCover[selectedAlbumIndex],/**VIA**/
        'alt':  albumsTitle[selectedAlbumIndex]/**VIA**/
    });/**VIA**/
    rightElemAlbum.attr({/**VIA**/
        'src': albumsCover[selectedAlbumIndex + 1],/**VIA**/
        'alt':  albumsTitle[selectedAlbumIndex + 1]/**VIA**/
    });/**VIA**/
    albumTitle.html(albumsTitle[selectedAlbumIndex]);/**DA IMPLEMENTARE NELL'ALTRO**/

    function changeAlbumCoverImages(leftIndex, centerIndex, rightIndex) {/**VIA**/
        leftElemAlbum.attr({/**VIA**/
            'src': albumsCover[leftIndex],/**VIA**/
            'alt':  albumsTitle[leftIndex]/**VIA**/
        });/**VIA**/
        centerElemAlbum.attr({/**VIA**/
            'src': albumsCover[centerIndex],/**VIA**/
            'alt':  albumsTitle[centerIndex]/**VIA**/
        });/**VIA**/
        rightElemAlbum.attr({/**VIA**/
            'src': albumsCover[rightIndex],/**VIA**/
            'alt':  albumsTitle[rightIndex]/**VIA**/
        });/**VIA**/
    }/**VIA**/

    $('.freccia-album-left').on('click', function() {/**VIA**/
        var currentAlbumIndex;/**VIA**/
        if (selectedAlbumIndex == 1) {
            currentAlbumIndex = selectedAlbumIndex - 1;/**VIA**/
            var leftIndex = albumsCover.length - 1;
            var centerIndex = currentAlbumIndex;/**VIA**/
            var rightIndex = currentAlbumIndex + 1;
            changeAlbumCoverImages(leftIndex, centerIndex, rightIndex);
            albumTitle.html(albumsTitle[currentAlbumIndex]);            
        } else if (selectedAlbumIndex == 0) {/**VIA**/
            currentAlbumIndex = albumsCover.length - 1;
            var leftIndex = currentAlbumIndex - 1;/**VIA**/
            var centerIndex = currentAlbumIndex;/**VIA**/
            var rightIndex = 0;
            changeAlbumCoverImages(leftIndex, centerIndex, rightIndex);
            albumTitle.html(albumsTitle[currentAlbumIndex])/**VIA**/
        } else {/**VIA**/
            currentAlbumIndex = selectedAlbumIndex - 1;
            var leftIndex = currentAlbumIndex - 1;/**VIA**/
            var centerIndex = currentAlbumIndex;
            var rightIndex = currentAlbumIndex + 1;/**VIA**/
            changeAlbumCoverImages(leftIndex, centerIndex, rightIndex);
            albumTitle.html(albumsTitle[currentAlbumIndex])    
        }/**VIA**/
        selectedAlbumIndex = currentAlbumIndex;/**VIA**/
        fotoAdapt();/**VIA**/
        showAlbum();/**VIA**/
    });

    $('.freccia-album-right').on('click', function() {/**VIA**/
        var currentAlbumIndex;
        if (selectedAlbumIndex < albumsCover.length - 2) {
            currentAlbumIndex = selectedAlbumIndex + 1;
            var leftIndex = currentAlbumIndex - 1;/**VIA**/
            var centerIndex = currentAlbumIndex;
            var rightIndex = currentAlbumIndex + 1;/**VIA**/
            changeAlbumCoverImages(leftIndex, centerIndex, rightIndex);
            albumTitle.html(albumsTitle[currentAlbumIndex])            
        } else if (selectedAlbumIndex == albumsCover.length - 2) {
            currentAlbumIndex = selectedAlbumIndex + 1;/**VIA**/
            var leftIndex = currentAlbumIndex - 1;
            var centerIndex = currentAlbumIndex;/**VIA**/
            var rightIndex = 0;
            changeAlbumCoverImages(leftIndex, centerIndex, rightIndex);
            albumTitle.html(albumsTitle[currentAlbumIndex])
        } else {
            currentAlbumIndex = 0;/**VIA**/
            var leftIndex = albumsCover.length - 1;/**VIA**/
            var centerIndex = currentAlbumIndex;
            var rightIndex = currentAlbumIndex + 1;/**VIA**/
            changeAlbumCoverImages(leftIndex, centerIndex, rightIndex);
            albumTitle.html(albumsTitle[currentAlbumIndex]) /**VIA**/   
        }
        selectedAlbumIndex = currentAlbumIndex;/**VIA**/
        fotoAdapt();/**VIA**/
        showAlbum();/**VIA**/
    });    





}())