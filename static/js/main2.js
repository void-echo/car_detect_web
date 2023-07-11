(function($) {
    'use strict';

    // sticky menu
    var header = $('.menu-sticky');
    var win = $(window);
    win.on('scroll', function() {
       var scroll = win.scrollTop();
       if (scroll < 1) {
           header.removeClass("sticky");
       } else {
           header.addClass("sticky");
       }

        $("section").each(function() {
        var elementTop = $(this).offset().top - $('#rs-header').outerHeight();
            if(scroll >= elementTop) {
                $(this).addClass('loaded');
            }
        });
    });

    // onepage nav
    var navclose = $('#onepage-menu');
    if(navclose.length){
       $(".nav-menu li").on("click", function () {
           if ($(".showhide").is(":visible")) {
               $(".showhide").trigger("click");
           }
       });
       
       if ($.fn.onePageNav) {
           $(".nav-menu").onePageNav({
               currentClass: "active-menu"
           });
       }
    }

    // collapse hidden  
    var navMain = $(".navbar-collapse");
    navMain.on("click", "a:not([data-toggle])", null, function () {
        navMain.collapse('hide');
    });

    // preloader
    $(window).on( 'load', function() {
        $(".loadding-page").delay(100).fadeOut(200);
        $(".loader__bar").on('click', function() {
            $(".loader__bar").fadeOut(200);
        })
    })

    // Counter Up
    if ($('.counter-number').length) {  
        $('.counter-number').counterUp({
            delay: 20,
            time: 1500
        });
    }

    // wow init
    new WOW().init();

    // Class Switching
    $(document).ready(function() {
      var switches = $('.rs-banner .dots');
      var currentIndex = 0;
      setInterval(function() {
        switches.eq(currentIndex).removeClass('active');
        currentIndex = (currentIndex + 1) % switches.length;
        switches.eq(currentIndex).addClass('active');
      }, 300);
    });

    // Hover Active Class
    $(document).ready(function() {
      if ($('.box').length > 0) {
        $('.box').hover(function() {
          $(this).addClass('active');
        }, function() {
          $(this).removeClass('active');
        });
      }
    });

    // Skill bar 
    var skillbar = $('.skillbar');
    if(skillbar.length) {
        $('.skillbar').skillBars({  
            from: 0,    
            speed: 4000,    
            interval: 100,  
            decimals: 0,    
        });
    }

    // Smooth Scroll Script
    $('a[href^="#"]').on('click', function(event) {
        // Prevent default anchor click behavior
        event.preventDefault();
        
        // Check if target element exists
        var target = $(this.hash);
        if (target.length) {
            // Animate scrolling to target element
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 500);
        }
    });

    // Image Tilt Animation On Mouse Move
    $(document).ready(function() {
        $('.tilt-image').each(function() {
            var mainClass = $(this).find('.tilted');
            if (mainClass.length) {
                var tiltImage = mainClass.find('img');
                var tiltAmount = parseInt(tiltImage.attr('data-tilt'));

                $(this).mousemove(function(e) {
                    var xPos = e.pageX - $(this).offset().left;
                    var yPos = e.pageY - $(this).offset().top;
                    var xAngle = (yPos / $(this).height() - 0.5) * tiltAmount;
                    var yAngle = (0.5 - xPos / $(this).width()) * tiltAmount;
                    tiltImage.css({
                        '-webkit-transform': 'perspective(500px) rotateX(' + xAngle + 'deg) rotateY(' + yAngle + 'deg)',
                        '-moz-transform': 'perspective(500px) rotateX(' + xAngle + 'deg) rotateY(' + yAngle + 'deg)',
                        'transform': 'perspective(500px) rotateX(' + xAngle + 'deg) rotateY(' + yAngle + 'deg)'
                    });
                }).mouseleave(function() {
                    tiltImage.css({
                        '-webkit-transform': 'perspective(500px) rotateX(0) rotateY(0)',
                        '-moz-transform': 'perspective(500px) rotateX(0) rotateY(0)',
                        'transform': 'perspective(500px) rotateX(0) rotateY(0)'
                    });
                });
            }
        });
    });

    // Marquee Slider
    if (!$('.marquee_text').data('marquee-loaded')) {
      $('.marquee_text').each(function() {
        var direction = $(this).data('direction');
        var pauseOnHover = $(this).data('hover-pause') === true;
        var mouseDown = false;
        var slider = $(this).marquee({
          direction: direction,
          duration: $(this).data('duration'),
          gap: $(this).data('gap'),
          delayBeforeStart: 0,
          duplicated: true,
          startVisible: true,
          pauseOnHover: pauseOnHover
        });
        $(this).on('mousedown', function() {
          mouseDown = true;
          slider.marquee('pause');
          $(this).data('mouse-down', true);
        });
        $(this).on('mouseup', function() {
          mouseDown = false;
          if (!$(this).data('mouse-dragged')) {
            slider.marquee('resume');
          }
          $(this).data('mouse-down', false);
          $(this).data('mouse-dragged', false);
        });
        $(this).on('mousemove', function() {
          if (mouseDown) {
            $(this).data('mouse-dragged', true);
          }
        });
      });
      $('.marquee_text').data('marquee-loaded', true);
    }

    // Popup Video
    $(document).ready(function() {
      $('.popup-button').click(function() {
        var videoSrc = $(this).data('video');
        if ($('#popup-video').length) {
          $('#popup-video iframe').attr('src', videoSrc);
          $('#popup-video').fadeIn();
          $('body').addClass('popup-open');
        }
      });

      $('#popup-video .close-button').click(function() {
        if ($('#popup-video').length) {
          $('#popup-video').fadeOut();
          $('body').removeClass('popup-open');
          $('#popup-video iframe').attr('src', '');
        }
      });

      $('#popup-video').click(function() {
        if ($('#popup-video').length) {
          $('#popup-video').fadeOut();
          $('body').removeClass('popup-open');
          $('#popup-video iframe').attr('src', '');
        }
      });
    });

    // scrollTop init
    var win = $(window);
    var totop = $('#scrollUp');
    win.on('scroll', function() {
      var scrollTop = win.scrollTop();
      var docHeight = $(document).height();
      var windowHeight = win.height();
      var scrollPercent = (scrollTop) / (docHeight - windowHeight);
      var progressOffset = 113.1 - (scrollPercent * 113.1);
      $('.progress-circle').css('stroke-dashoffset', progressOffset);

      if (scrollTop > 150) {
        totop.fadeIn();
      } else {
        totop.fadeOut();
      }
    });
    totop.on('click', function() {
      $("html,body").animate({
        scrollTop: 0
      }, 500);
    });

})(jQuery);