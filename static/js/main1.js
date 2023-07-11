(function($) {
    'use strict';

    // Collaps Button Sidebar Demo
    $('.rs-sidebar-demo .collaps-btn').click(function() {
        $(this).parents('html').toggleClass('demo-is-open')
    });

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

    //preloader
      $(window).on( 'load', function() {
          
          $("#pre-load").delay(600).fadeOut(300);
          $(".pre-loader").delay(600).fadeOut(300);
          
          if($(window).width() < 992) {
              $('.rs-menu').css('height', '0');
              $('.rs-menu').css('opacity', '0');
              $('.rs-menu').css('z-index', '-1');
              $('.rs-menu-toggle').on( 'click', function(){
                  $('.rs-menu').css('opacity', '1');
                  $('.rs-menu').css('z-index', '1');
              });
          }
      });

    // Parallax Stuff
    if ($(".stuff").length) {
        var stuff = $('.stuff').get(0);
        var parallaxInstance = new Parallax(stuff);
    }
    if ($(".stuff2").length) {
        var stuff = $('.stuff2').get(0);
        var parallaxInstance = new Parallax(stuff);
    }
    if ($(".stuff3").length) {
        var stuff = $('.stuff3').get(0);
        var parallaxInstance = new Parallax(stuff);
    }
    if ($(".stuff4").length) {
        var stuff = $('.stuff4').get(0);
        var parallaxInstance = new Parallax(stuff);
    }

    $("a.clickup").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function() {
                window.location.hash = hash;
            });
        }
    });
    
    // OwlCarousel
    $('.rs-carousel').each(function() {
        var owlCarousel = $(this),
        loop = owlCarousel.data('loop'),
        items = owlCarousel.data('items'),
        dotsEach = owlCarousel.data('doteach'),
        margin = owlCarousel.data('margin'),
        stagePadding = owlCarousel.data('stage-padding'),
        autoplay = owlCarousel.data('autoplay'),
        autoplayTimeout = owlCarousel.data('autoplay-timeout'),
        smartSpeed = owlCarousel.data('smart-speed'),
        dots = owlCarousel.data('dots'),
        nav = owlCarousel.data('nav'),
        navSpeed = owlCarousel.data('nav-speed'),
        xsDevice = owlCarousel.data('mobile-device'),
        xsDeviceNav = owlCarousel.data('mobile-device-nav'),
        xsDeviceDots = owlCarousel.data('mobile-device-dots'),
        smDevice = owlCarousel.data('ipad-device'),
        smDeviceNav = owlCarousel.data('ipad-device-nav'),
        smDeviceDots = owlCarousel.data('ipad-device-dots'),
        smDevice2 = owlCarousel.data('ipad-device2'),
        smDeviceNav2 = owlCarousel.data('ipad-device-nav2'),
        smDeviceDots2 = owlCarousel.data('ipad-device-dots2'),
        mdDevice = owlCarousel.data('md-device'),
        lgDevice = owlCarousel.data('lg-device'),
        centerMode = owlCarousel.data('center-mode'),
        HoverPause = owlCarousel.data('hoverpause'),
        mdDeviceNav = owlCarousel.data('md-device-nav'),
        mdDeviceDots = owlCarousel.data('md-device-dots');
        owlCarousel.owlCarousel({
            loop: (loop ? true : false),
            dotsEach: (dotsEach ? true : false),
            items: (items ? items : 4),
            lazyLoad: true,
            center: (centerMode ? true : false),
            autoplayHoverPause: (HoverPause ? true : false),
            margin: (margin ? margin : 0),
            //stagePadding: (stagePadding ? stagePadding : 0),
            autoplay: (autoplay ? true : false),
            autoplayTimeout: (autoplayTimeout ? autoplayTimeout : 1000),
            smartSpeed: (smartSpeed ? smartSpeed : 250),
            dots: (dots ? true : false),
            nav: (nav ? true : false),
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            navSpeed: (navSpeed ? true : false),
            responsiveClass: true,
            responsive: {
                0: {
                    items: (xsDevice ? xsDevice : 1),
                    nav: (xsDeviceNav ? true : false),
                    dots: (xsDeviceDots ? true : false),
                    center: false,
                },
                576: {
                    items: (smDevice2 ? smDevice2 : 2),
                    nav: (smDeviceNav2 ? true : false),
                    dots: (smDeviceDots2 ? true : false),
                    center: false,
                },
                768: {
                    items: (smDevice ? smDevice : 3),
                    nav: (smDeviceNav ? true : false),
                    dots: (smDeviceDots ? true : false),
                    center: false,
                },
                992: {
                    items: (mdDevice ? mdDevice : 4),
                    nav: (mdDeviceNav ? true : false),
                    dots: (mdDeviceDots ? true : false),
                },
                1200: {
                    items: (lgDevice ? lgDevice : 4),
                }
            }
        });
    });

    // Counter Up
    if ($('.counter-number').length) {  
        $('.counter-number').counterUp({
            delay: 20,
            time: 1500
        });
    }

    // wow init
    new WOW().init();

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

    // Partical banner
    if ($('.particle-banner').length) {
        // Some random colors
        const colors = ["#ffffff", "#ffffff", "#d52925"];

        const numBalls = 20;
        const balls = [];

        for (let i = 0; i < numBalls; i++) {
            let ball = document.createElement("div");
            ball.classList.add("ball");
            ball.style.background = colors[Math.floor(Math.random() * colors.length)];
            ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
            ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
            ball.style.transform = `scale(${Math.random()})`;
            ball.style.width = `${Math.random()}em`;
            ball.style.height = ball.style.width; 
            balls.push(ball);

            $('.particle-banner').append(ball);
        }

        // Keyframes
        balls.forEach((el, i, ra) => {
            let to = {
            x: Math.random() * (i % 2 === 0 ? -11 : 11),
            y: Math.random() * 18
            };

            let anim = el.animate(
            [
                { transform: "translate(0, 0)" },
                { transform: `translate(${to.x}rem, ${to.y}rem)` }
            ],
            {
                duration: (Math.random() + 1) * 2000, // random duration
                direction: "alternate",
                fill: "both",
                iterations: Infinity,
                easing: "ease-in-out"
            }
            );
        });
    }


})(jQuery);

 