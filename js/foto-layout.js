(function() {
  
    var $window = $(window);/**VIA**/
    $window.on('load', function() {/**VIA**/

    
        function elemWidth() {
            var elemSx = $('.elem-album-sx');/**VIA**/
            var elemDx = $('.elem-album-dx');/**VIA**/
            var elemCn = $('.elem-album-cn');/**VIA**/
            var widthElemSx = elemSx.width();/**VIA**/
            var widthElemDx = elemDx.width();/**VIA**/
            var widthElemCn = elemCn.width();/**VIA**/
            var elemGalleria = $('.foto-galleria');/**RESTA**/
            var widthElemGalleria = elemGalleria.width();/**RESTA**/
            elemGalleria.css ({'height': widthElemGalleria / 2});/**RESTA**/
            if (window.innerWidth < 960) {/**VIA**/
                var heightElemCn = widthElemCn / 1.7;/**VIA**/
                elemCn.css({'height': heightElemCn});/**VIA**/
            } else {/**VIA**/
                elemSx.css({'height': widthElemSx});/**VIA**/
                elemDx.css({'height': widthElemDx});/**VIA**/
                elemCn.css({'height': widthElemCn});/**VIA**/
            }
            
            fotoAdapt();/**VIA**/
        }

        function centerArrow() {   /**VIA**//**VIA**//**VIA**//**VIA**/
            var leftArrow = $('.freccia-album-left');
            var rightArrow = $('.freccia-album-right');
            var value;/**VIA**//**VIA**//**VIA**/
            var valueText;
            var heightGalleria = $('.album-galleria').outerHeight();
            if (window.innerWidth < 300) {
                value = (heightGalleria / 2) - 22.5;/**VIA**//**VIA**/
            } else if (window.innerWidth < 960) {
                value = (heightGalleria / 2) - 27.5;
            } else {/**VIA**//**VIA**//**VIA**//**VIA**/
                value = (heightGalleria / 2) - 20;
            }
            valueText = value.toString() + 'px'
            leftArrow.css({'top': valueText});/**VIA**//**VIA**//**VIA**/
            rightArrow.css({'top': valueText});

            window.addEventListener('resize', function() {
                var heightGalleria = $('.album-galleria').outerHeight();
                if (window.innerWidth < 300) {
                    value = (heightGalleria / 2) - 22.5;
                } else if (window.innerWidth < 960) {
                    value = (heightGalleria / 2) - 27.5;/**VIA**//**VIA**//**VIA**/
                } else {
                    value = (heightGalleria / 2) - 20;
                }/**VIA**//**VIA**//**VIA**/
                valueText = value + 'px'
                leftArrow.css({'top': valueText});
                rightArrow.css({'top': valueText});
            });
        }/**VIA**//**VIA**//**VIA**//**VIA**//**VIA**/

        function centerNavigateArrows() {/**RESTA**/
            var navigateLeft = $('.navigate-left');/**RESTA**/
            var navigateRight = $('.navigate-right');/**RESTA**/
            var heightFotoGalleria = $('.foto-galleria').height();/**RESTA**/
            var topValue = (heightFotoGalleria / 2) - 20;/**RESTA**/
            navigateLeft.css({'top': topValue});/**RESTA**/
            navigateRight.css({'top': topValue});/**RESTA**/
/**RESTA**/
            window.addEventListener('resize', function() {/**RESTA**/
                var heightFotoGalleria = $('.foto-galleria').height();/**RESTA**/
                var topValue = (heightFotoGalleria / 2) - 20;/**RESTA**/
                navigateLeft.css({'top': topValue});/**RESTA**/
                navigateRight.css({'top': topValue});/**RESTA**/
            })/**RESTA**/
        }/**RESTA**/


        elemWidth();/**RESTA**/
        centerArrow();/**VIA**/
        centerNavigateArrows();/**RESTA**/


        window.addEventListener('resize', function() {
            var elemSx = $('.elem-album-sx');/**VIA**/
            var elemDx = $('.elem-album-dx');/**VIA**/
            var elemCn = $('.elem-album-cn');/**VIA**/
            var widthElemSx = elemSx.width();/**VIA**/
            var widthElemDx = elemDx.width();/**VIA**/
            var widthElemCn = elemCn.width();/**VIA**/
            var elemGalleria = $('.foto-galleria');/**RESTA**/
            var widthElemGalleria = elemGalleria.width();/**RESTA**/
            elemGalleria.css ({'height': widthElemGalleria / 2});/**RESTA**/
            if (window.innerWidth < 960) {/**VIA**/
                var heightElemCn = widthElemCn / 1.7;/**VIA**/
                elemCn.css({'height': heightElemCn});/**VIA**/
            } else {/**VIA**/
                elemSx.css({'height': widthElemSx});/**VIA**/
                elemDx.css({'height': widthElemDx});/**VIA**/
                elemCn.css({'height': widthElemCn});/**VIA**/
            }/**VIA**/

            var imgGalleria = $('.album-galleria li img');/**VIA**/
            imgGalleria.each(function() {
                if (this.width > this.height) {/**VIA**/
                    $(this).css('width', '100%');
                    $(this).css('height', 'auto');
                } else {/**VIA**/
                    $(this).css('height', '100%');/**VIA**/
                    $(this).css('width', 'auto');
                }/**VIA**/
            })
            imgGalleria.each(function() {/**VIA**/
                $(this).css({
                    'margin-left': -this.width / 2,/**VIA**/
                    'margin-top': -this.height / 2
                });/**VIA**/
            })    

        });

    })
}())