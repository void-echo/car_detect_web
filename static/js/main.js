/**
*
* -----------------------------------------------------------------------------
*
* Template : Teknolab - Technology & IT Solutions HTML Template
* Author : rs-theme
* Author URI : http://www.rstheme.com/
*
* -----------------------------------------------------------------------------
*
**/
(function($) {
	"use strict";
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
	
    //window load
   $(window).on( 'load', function() {
        $("#loading").delay(1500).fadeOut(500);
        $("#loading-center").on( 'click', function() {
        $("#loading").fadeOut(500);
        })
    })

   // Parallax Stuff
   if ($("#stuff").length) {
       var stuff = $('#stuff').get(0);
       var parallaxInstance = new Parallax(stuff);
   }

   // onepage nav
   var navclose = $('#onepage-menu');
   if(navclose.length){
       $(".nav-menu li a").on("click", function () {
           if ($(".showhide").is(":visible")) {
               $(".showhide").trigger("click");
           }
       });
       
       if ($.fn.onePageNav) {
           $(".nav-menu").onePageNav({
               currentClass: "current-menu-item"
           });
       }
   }

   //blog Slider

    if ($('.project-style1').length) {
        $('.project-style1').slick({
           autoplay: true,
           autoplaySpeed: 2000,
           speed: 2000,
           slidesToShow: 4,
           slidesToScroll: 1,
           arrows: false,
           dots: true,
            responsive: [
               {
                 breakpoint: 992,
                 settings: {
                   slidesToShow: 2,
                 }
               },
               {
                   breakpoint: 575,
                   settings: {
                     slidesToShow: 1,
                   }
               }
           ]
       });
    } 

    // Slider Custom jQuery
    var nivo_slider = $('#nivoSlider');
        if(nivo_slider.length){
        $('#nivoSlider').nivoSlider({
            effect: 'random',
            slices: 15,
            boxCols: 8,
            boxRows: 4,
            animSpeed: 600,
            pauseTime: 5000000000,
            startSlide: 0,
            directionNav: true,
            controlNavThumbs: false,
            pauseOnHover: true,
            manualAdvance: false
        });
    } 
   
    // collapse hidden  
     var navMain = $(".navbar-collapse");
     navMain.on("click", "a:not([data-toggle])", null, function () {
         navMain.collapse('hide');
     });  

    // video 
    if ($('.player').length) {
        $(".player").YTPlayer();
    }

    // wow init
    new WOW().init();
    
    // image loaded portfolio init
    var gridfilter = $('.grid');
        if(gridfilter.length){
        $('.grid').imagesLoaded(function() {
            $('.gridFilter').on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            var $grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.grid-item',
                }
            });
        });
    }   
        
    // project Filter
    if ($('.gridFilter button').length) {
        var projectfiler = $('.gridFilter button');
            if(projectfiler.length){
            $('.gridFilter button').on('click', function(event) {
                $(this).siblings('.active').removeClass('active');
                $(this).addClass('active');
                event.preventDefault();
            });
        }
    }
    
    // magnificPopup init
    var imagepopup = $('.image-popup');
    if(imagepopup.length){
        $('.image-popup').magnificPopup({
            type: 'image',
            callbacks: {
                beforeOpen: function() {
                   this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated zoomInDown');
                }
            },
            gallery: {
                enabled: true
            }
        });
    }

    // Get a quote popup
    var popupquote = $('.popup-quote');
    if(popupquote.length){
        $('.popup-quote').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#qname',
            removalDelay: 500,
            callbacks: {
                beforeOpen: function() {
                    this.st.mainClass = this.st.el.attr('data-effect');
                    if(win.width() < 800) {
                        this.st.focus = false;
                    } else {
                        this.st.focus = '#qname';
                    }
                }
            }
        });
    }
    
    //preloader
    $(window).on('load', function() {
        $("#loader").delay(1000).fadeOut(500);
    })

    //Videos popup jQuery 
    var popupvideos = $('.popup-videos');
    if(popupvideos.length){
        $('.popup-videos').magnificPopup({
            disableOn: 10,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        }); 
    }


    //CountDown Timer
    var CountTimer = $('.CountDownTimer');
    if(CountTimer.length){ 
        $(".CountDownTimer").TimeCircles({
            fg_width: 0.030,
            bg_width: 0.8,
            circle_bg_color: "#eeeeee",
            circle_fg_color: "#eeeeee",
            time: {
                Days:{
                    color: "#032390"
                },
                Hours:{
                    color: "#032390"
                },
                Minutes:{
                    color: "#032390"
                },
                Seconds:{
                    color: "#032390"
                }
            }
        }); 
    }
    
    /*-------------------------------------
        OwlCarousel
    -------------------------------------*/
    $('.rs-carousel').each(function() {
        var owlCarousel = $(this),
        loop = owlCarousel.data('loop'),
        items = owlCarousel.data('items'),
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
        centerMode = owlCarousel.data('center-mode'),
        HoverPause = owlCarousel.data('hoverpause'),
        mdDeviceNav = owlCarousel.data('md-device-nav'),
        mdDeviceDots = owlCarousel.data('md-device-dots');
        owlCarousel.owlCarousel({
            loop: (loop ? true : false),
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
                768: {
                    items: (smDevice2 ? smDevice2 : 2),
                    nav: (smDeviceNav2 ? true : false),
                    dots: (smDeviceDots2 ? true : false),
                    center: false,
                },
                992: {
                    items: (smDevice ? smDevice : 3),
                    nav: (smDeviceNav ? true : false),
                    dots: (smDeviceDots ? true : false),
                    center: false,
                },
                1200: {
                    items: (mdDevice ? mdDevice : 4),
                    nav: (mdDeviceNav ? true : false),
                    dots: (mdDeviceDots ? true : false),
                }
            }
        });
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
		
    // Counter Up
    var counter = $('.rs-count');
    if(counter.length) {  
        $(".rs-count").counterUp({time:3000});
    }
    
    // scrollTop init	
    var totop = $('#scrollUp');    
    win.on('scroll', function() {
        if (win.scrollTop() > 150) {
            totop.fadeIn();
        } else {
            totop.fadeOut();
        }
    });
    totop.on('click', function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    });

    //canvas menu
    var navexpander = $('#nav-expander');
    if(navexpander.length){
        $('#nav-expander, #nav-close, #nav-close2, .offwrap').on('click',function(e){
            e.preventDefault();
            $('body').toggleClass('nav-expanded');
        });
    }

	
	/*----------------------------
    single-productjs active
    ------------------------------ */
    var singleproductimage = $('.single-product-image');
    if(singleproductimage.length){
        $('.single-product-image').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.single-product-nav'
        });
    }

    var singleproductnav = $('.single-product-nav');
    if(singleproductnav.length){
        $('.single-product-nav').slick({
            slidesToShow: 3,
            asNavFor: '.single-product-image',
            dots: false,
            focusOnSelect: true,
            centerMode:false,
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 591,
                  settings: {
                    slidesToShow: 2
                  }
                }
              ] 
        });
    }

    // 3D Slider Carousel
    if ($('.carousel').length) { 
        $('.carousel').carousel({
            autoplay: true,
            duration: 0,
            shift: 5,
            padding: 10,
        });
    }


    var tilt = $('.js-tilt');
    if(tilt.length) {
        const tilt = $('.js-tilt').tilt();
    }

    var plus_team = $('.plus-team');
    if(plus_team.length) {
    
        $( ".plus-team" ).on( "click", function( event ) {
            $(this).toggleClass("active_social");
        });
    }

   // Collaps Button Pricetable
       $('.item .collaps-btn').click(function() {
           $(this).parents('.item').toggleClass('is-open')
       });

    // Offcanvas btn
    $('.menu-wrap-off a').each(function(){
        var href = $(this).attr("href");
        if(href == "#"){
            $(this).addClass('hash');
        }else{
            $(this).removeClass('hash');
        }
    });


   /******** Mobile Menu Start ********/
   
   $('.mobile-navbar-menu a').each(function(){
       var href = $(this).attr("href");
       if(href ="#"){
           $(this).addClass('hash');
       }else{
           $(this).removeClass('hash');
       }
   });

   $.fn.menumaker = function(options) {
     var mobile_menu = $(this), settings = $.extend({
       format: "dropdown",
       sticky: false
     }, options);

       return this.each(function() {
       mobile_menu.find('li ul').parent().addClass('has-sub');
       var multiTg = function() {
           mobile_menu.find(".has-sub").prepend('<span class="submenu-button"><em></em></span>');
           mobile_menu.find(".hash").parent().addClass('hash-has-sub');
           mobile_menu.find('.submenu-button').on('click', function() {
               $(this).toggleClass('submenu-opened');
               if ($(this).siblings('ul').hasClass('open-sub')) {
                   $(this).siblings('ul').removeClass('open-sub').hide('fadeIn');
                   $(this).siblings('ul').hide('fadeIn');                                     
               }
               else {
                   $(this).siblings('ul').addClass('open-sub').hide('fadeIn');
                   $(this).siblings('ul').slideToggle().show('fadeIn');
               }
           });
       };

       if (settings.format === 'multitoggle') multiTg();
       else mobile_menu.addClass('dropdown');
       if (settings.sticky === true) mobile_menu.css('position', 'fixed');
      var resizeFix = function() {
           if ($( window ).width() > 991) {
               mobile_menu.find('ul').show('fadeIn');
               mobile_menu.find('ul.sub-menu').hide('fadeIn');
           }          
       };
       resizeFix();
       return $(window).on('resize', resizeFix);
       });
   };

   $(document).ready(function(){
       $("#mobile-navbar-menu").menumaker({
       format: "multitoggle"
       });
   });

})(jQuery);