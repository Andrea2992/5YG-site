(function() {
var $window = $(window);


function centerArrow() {    
var leftArrow = $('.freccia-album-left');
var rightArrow = $('.freccia-album-right');
var value;
var valueText;
var heightGalleria = $('.album-galleria').outerHeight();
if (window.innerWidth < 500) {
    console.log($window.innerWidth);
    value = (heightGalleria / 2) - 12;
} else {
    console.log(window.innerWidth);
    value = (heightGalleria / 2) - 20;
}
valueText = value.toString() + 'px'
leftArrow.css({'top': valueText});
rightArrow.css({'top': valueText});

$window.on('resize', function() {
    var heightGalleria = $('.album-galleria').outerHeight();
    if (window.innerWidth < 500) {
        console.log($window.innerWidth);
        value = (heightGalleria / 2) - 12;
    } else {
        console.log(window.innerWidth);
        value = (heightGalleria / 2) - 20;
    }
    valueText = value.toString() + 'px'
    leftArrow.css({'top': valueText});
    rightArrow.css({'top': valueText});
});
}



var widthElemSx = $('.elem-album-sx').width();
$('.elem-album-sx').css({'height': widthElemSx});
var widthElemDx = $('.elem-album-dx').width();
$('.elem-album-dx').css({'height': widthElemDx});
var widthElemCn = $('.elem-album-cn').width();
$('.elem-album-cn').css({'height': widthElemCn});

$window.on('resize', function() {
    var widthElemSx = $('.elem-album-sx').width();
    $('.elem-album-sx').css({'height': widthElemSx});
    var widthElemDx = $('.elem-album-dx').width();
    $('.elem-album-dx').css({'height': widthElemDx});
    widthElemCn = $('.elem-album-cn').width();
    $('.elem-album-cn').css({'height': widthElemCn});
    
});






centerArrow();

}())