function createSlider() {
  $('.slider').each(function() {              
    var $this   = $(this);                    
    var group  = $this.find('.slide-group'); 
    var slides = $this.find('.slide');       
    var sliderButtons  = [];                    
    var currentIndex = 0;                     
    var timeout;                              

    function move(newIndex) {          
      advance();
      var animationInProgress = group.is(':animated');
      var sameSlide = currentIndex === newIndex;
      if (animationInProgress || sameSlide) {  
        return;
      }
      sliderButtons[currentIndex].removeClass('active'); 
      sliderButtons[newIndex].addClass('active');
      var animationMove = newIndex > currentIndex ? '-100%' : '100%';
      var slideMove = newIndex > currentIndex ? '100%' : '-100%';
      slides.eq(newIndex).css( {left: slideMove, display: 'block'} );
      group.animate( {left: animationMove}, function() {    
        slides.eq(currentIndex).css( {display: 'none'} );      
        slides.eq(newIndex).css( {left: 0} ); 
        group.css( {left: 0} );               
        currentIndex = newIndex;               
      });
    }

    function advance() {                     
      clearTimeout(timeout);                 
      timeout = setTimeout(function() {      
        if (currentIndex < (slides.length - 1)) { 
          move(currentIndex + 1);            
        } else {                             
          move(0);                           
        }
      }, 4000);                              
    }

    $.each(slides, function(index) {
      var sliderButton = $('<button type="button" class="slide-btn">&bull;</button>');
      if (index === currentIndex) {    
        sliderButton.addClass('active');    
      }
      sliderButton.on('click', function() { 
        move(index);                   
      }).appendTo('.slide-buttons');   
      sliderButtons.push(sliderButton);       
    });

    advance();                          
  });
}