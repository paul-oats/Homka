jQuery(document).ready(function($){
  function detectMob() {
    return ( window.innerWidth <= 1000  );
  }

    // var show_1 = true;
    // var countbox_1 = ".counter_1";
    // $(window).on("scroll load resize", function () {
    //     if (!show_1) return false; // Отменяем показ анимации, если она уже была выполнена
    //     var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
    //     var e_top = $(countbox_1).offset().top; // Расстояние от блока со счетчиками до верха всего документа
    //     var w_height = $(window).height(); // Высота окна браузера
    //     var d_height = $(document).height(); // Высота всего документа
    //     var e_height = $(countbox_1).outerHeight(); // Полная высота блока со счетчиками
    //     if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
    //       $('.counter_1 .benefits__number').css('opacity', '1');
    //       $('.counter_1 .benefits__number').spincrement({
    //           thousandSeparator: " ",
    //           duration: 1200
    //       });
    //        show_1 = false;
    //     }
    // });

    // var show_2 = true;
    // var countbox_2 = ".counter_1";
    // $(window).on("scroll load resize", function () {
    //     if (!show_2) return false; // Отменяем показ анимации, если она уже была выполнена
    //     var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
    //     var e_top = $(countbox_2).offset().top; // Расстояние от блока со счетчиками до верха всего документа
    //     var w_height = $(window).height(); // Высота окна браузера
    //     var d_height = $(document).height(); // Высота всего документа
    //     var e_height = $(countbox_2).outerHeight(); // Полная высота блока со счетчиками
    //     if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
    //       $('.counter_2 .benefits__number').css('opacity', '1');
    //       $('.counter_2 .benefits__number').spincrement({
    //           thousandSeparator: " ",
    //           duration: 1200
    //       });
    //        show_2 = false;
    //     }
    // });



  if($(".lazy").length > 0){        
    $(".lazy").Lazy({
        // enableThrottle: true,
        // throttle: 250,
        removeAttribute: true,
        afterLoad: function(element) {
            $(element).addClass('loaded')
        },
        onFinishedAll: function() {
            //$('.loading').toggleClass('loaded');
            //  runSecond();
            if( !this.config("autoDestroy") ){
                this.destroy();
            }
        },
        dstrctLoader: function(element) {
          if(detectMob()){
            element.attr('src', element.data("mob-src"));
          }else{
            element.attr('src', element.data("desct-src"));
          }
        }
    })
  }

$(document).scroll(function(e){
  $('.semka').attr('style', 'transform: rotate('+window.pageYOffset+'deg);')
})

  


  // $('.ba-slider').each(function(){
  //   var cur = $(this),
  //       width = cur.width()+'px';
  //       cur.find('.resize img').css('width', width);
  //   drags(cur.find('.handle'), cur.find('.resize'), cur);
  // });
  // $(window).resize(function(){
  //     $('.ba-slider').each(function(){
  //       var cur = $(this);
  //       var width = cur.width()+'px';
  //       cur.find('.resize img').css('width', width);
  //     });
  //   });
  //   function drags(dragElement, resizeElement, container) {
  //     // Initialize the dragging event on mousedown.
  //     dragElement.on('mousedown touchstart', function(e) {
        
  //       dragElement.addClass('draggable');
  //       resizeElement.addClass('resizable');
        
  //       // Check if it's a mouse or touch event and pass along the correct value
  //       var startX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;
        
  //       // Get the initial position
  //       var dragWidth = dragElement.outerWidth(),
  //           posX = dragElement.offset().left + dragWidth - startX,
  //           containerOffset = container.offset().left,
  //           containerWidth = container.outerWidth();
     
  //       // Set limits
  //       minLeft = containerOffset + 10;
  //       maxLeft = containerOffset + containerWidth - dragWidth - 10;
        
  //       // Calculate the dragging distance on mousemove.
  //       dragElement.parents().on("mousemove touchmove", function(e) {
            
  //         // Check if it's a mouse or touch event and pass along the correct value
  //         var moveX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;
          
  //         leftValue = moveX + posX - dragWidth;
          
  //         // Prevent going off limits
  //         if ( leftValue < minLeft) {
  //           leftValue = minLeft;
  //         } else if (leftValue > maxLeft) {
  //           leftValue = maxLeft;
  //         }
          
  //         // Translate the handle's left value to masked divs width.
  //         widthValue = (leftValue + dragWidth/2 - containerOffset)*100/containerWidth+'%';
                
  //         // Set the new values for the slider and the handle. 
  //         // Bind mouseup events to stop dragging.
  //         $('.draggable').css('left', widthValue).on('mouseup touchend touchcancel', function () {
  //           $(this).removeClass('draggable');
  //           resizeElement.removeClass('resizable');
  //         });
  //         $('.resizable').css('width', widthValue);
  //       }).on('mouseup touchend touchcancel', function(){
  //         dragElement.removeClass('draggable');
  //         resizeElement.removeClass('resizable');
  //       });
  //       e.preventDefault();
  //     }).on('mouseup touchend touchcancel', function(e){
  //       dragElement.removeClass('draggable');
  //       resizeElement.removeClass('resizable');
  //     });
  //   }

  //   tippy('#cartoonish', {
  //     content: 'Cartoonish - графічний стиль ілюстрації, відомий завдяки мультфільмам. Детальніше читай тут: <a rel="nofollow" href="https://graphicmama.com/blog/cartoon-characters-in-marketing/" target="_blank">https://graphicmama.com/blog/cartoon-characters-in-marketing/</a>',
  //     allowHTML: true,
  //     trigger: 'mouseenter click',
  //     maxWidth: 350,
  //     interactive: true,
  //     interactiveDebounce: 100,
  //   });

    $.fn.isInViewport = function() {
      var elementTop = $(this).offset().top,
        elementBottom = elementTop + $(this).outerHeight(),
        viewportTop = $(window).scrollTop(),
        viewportBottom = viewportTop + $(window).height();
      return elementBottom > viewportTop && elementTop < viewportBottom;
    };
    
    $.fn.isInViewportHeight = function() {
      var elementTop = $(this).offset().top,
        elementBottom = elementTop + $(this).outerHeight(),
        viewportTop = $(window).scrollTop(),
        viewportBottom = viewportTop + $(window).height();
        
        // scrolledPX = ( (elementBottom - viewportTop - 100) * 100 ) /  $(this).height();
        // if(scrolledPX <= 100){
        //   return scrolledPX;
        // }else{
        //   return 100;
        // }

        return Math.round((elementTop - viewportTop) / (screen.height / 100))
    }
  
    
    function getActive(){
      

      if ($('.comment-box').isInViewport()) {
        $('.comment-box').addClass('in_view')
      }

      if ($('.counter_1').isInViewport()) {
        if( !$('.counter_1').hasClass('in_view')){
          $('.counter_1').addClass('in_view');
          $('.counter_1.in_view .benefits__number').css('opacity', '1');
          $('.counter_1.in_view .benefits__number').spincrement({
            thousandSeparator: " ",
            duration: 2200
          });
        }
      }

      if ($('.counter_2').isInViewport()) {
        if( !$('.counter_2').hasClass('in_view')){
          $('.counter_2').addClass('in_view');
          $('.counter_2.in_view .benefits__number').css('opacity', '1');
          $('.counter_2.in_view .benefits__number').spincrement({
            thousandSeparator: " ",
            duration: 2200
          });
        }
      }

      


        $('section').each(function() {
          if ($(this).isInViewport()) {
            if($(this).hasClass('active') == false){
              $(this).addClass('active');

              

            }
          } else {
            if($(this).hasClass('active')){
              $(this).removeClass('active');
              
            }
          }
        })

    
      
      




        // if ($('.turbo__animation').isInViewport()) {
        //   var left = 15 * (screen.width / 100),
        //       right = $('.turbo__animation').isInViewportHeight() * (screen.width / 100);
        //   $('.turbo__animation img').attr('style','margin-left: calc(' + left + 'px - ' + right + 'px);')
        //   // $('.turbo__animation img').attr('style','transform: translateX(calc(18% - ' + $('.turbo__animation').isInViewportHeight() + '%));')
        // }
        // if ($('.steakerpacks__block-animation').isInViewport()) {
        //   if( $('.steakerpacks__block-animation').isInViewportHeight() < '70'){
        //     $('.steakerpacks__block-animation').addClass('in');  
        //   }else{
        //     $('.steakerpacks__block-animation').removeClass('in');  
        //   }
        // }
      }
      $(window).on('resize scroll', function(e) {
        getActive();
      });
      getActive();
   
  });

  
  
  
