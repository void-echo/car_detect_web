/**
*
* --------------------------------------------------------------------
*
* Template : kaouwa - Medical WordPress Theme
* Author : rs-theme
* Author URI : http://www.rstheme.com/
*
* --------------------------------------------------------------------
*
**/

(function($) {
    "use strict";
    // sticky menu
    var header = $('.menu-sticky');
    var win = $(window);
    var headerinnerHeight = $(".header-inner").innerHeight();

    win.on('scroll', function() {
       var scroll = win.scrollTop();
       if (scroll < headerinnerHeight) {
           header.removeClass("sticky");
       } else {
           header.addClass("sticky");
       }
    });

    $('.header-inner').waypoint('sticky', {
      offset: -10
    });

    $(".widget_nav_menu li a").filter(function(){
        return $.trim($(this).html()) == '';
    }).hide();

    // Canvas Menu Js
    $( ".nav-link-container > a" ).off("click").on("click", function(event){
        event.preventDefault();
        $(".nav-link-container").toggleClass("nav-inactive-menu-link-container");
        $(".sidenav").toggleClass("nav-active-menu-container");
    });
    
    $(".nav-close-menu-li > a").on('click', function(event){
        $(".sidenav").toggleClass("nav-active-menu-container");
        $(".content").toggleClass("inactive-body");
    });
	
	$("a.pointer-events").on('click', function(){
		$(".menu-sticky").addClass('nosticky');
	});
	
	$(".mfp-close").on('click', function(){
		$(".menu-sticky").removeClass('nosticky');
	});
	
	

    // Smooth About
    if ($('.smoothAbout').length){
        $(".smoothAbout").on('click', function() {
            $('html, body').animate({
                scrollTop: $("#rs-about").offset().top
            }, 1000);
        });
    }


    // Smooth About
    var rs_banner_btn = $('.rs-banner-fix .rs-icon-btn a');
    if(rs_banner_btn.length){
        $(".rs-banner-fix .rs-icon-btn a").on('click', function() {
            $('html, body').animate({
                scrollTop: $("#rs-widgets").offset().top
            }, 1000);
        });
    }

    // collapse hidden
    $(function(){ 
        var navMain = $(".navbar-collapse"); // avoid dependency on #id
         // "a:not([data-toggle])" - to avoid issues caused
         // when you have dropdown inside navbar
         navMain.on("click", "a:not([data-toggle])", null, function () {
             navMain.collapse('hide');
        });
     });


    // video 
    if ($('.player').length) {
        $(".player").YTPlayer();
    }

    //Flicker

    if ($('ul#rsflicker').length) { 
        $('ul#rsflicker').jflickrfeed({        
            limit: flicker_data.limit_f,
            qstrings: {
                id: flicker_data.flicker_id
            },
            itemTemplate: '<li><a href=\"http://www.flickr.com/photos/'+flicker_data.flicker_id+'"\"><img src=\"{{image_s}}\" alt=\"{{title}}\" /></a></li>'
        });
    }
      
    

    //search 

    $('.sticky_search').on('click', function(event) {        
        $('.sticky_form').slideToggle('show');
        $( '.sticky_form input' ).focus();
    });

    $('.sticky_search').on('click', function() {
        $('body').removeClass('search-active').removeClass('search-close');
          if ($(this).hasClass('close-full')) {
            $('body').addClass('search-close');
        }
        else {
            $('body').addClass('search-active');
        }
        return false;
    });

    $('.sticky_form_search').on('click', function() {      
        $('body, html').removeClass('rs-search-active').removeClass('rs-search-close');
          if ($(this).hasClass('close-search')) {
          $('body, html').addClass('rs-search-close');

        }
        else {
          $('body, html').addClass('rs-search-active');
        }
        return false;
    });

   

    //One page menu js
    //One page menu js
    if ($('.page-template-page-single-php .nav').length) {
        $('#single-menu li:first-child').addClass('active');
        $('#single-menu a').on('click', function(){
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              $('#single-menu li').removeClass('active');
              $(this).parent('li').addClass('active');
              if (target.length) {
                $('html, body').animate({
                  scrollTop: (target.offset().top - 70)
                }, 1000, "easeInOutExpo");
                return false;
              }
            }
        });

        var navChildren = $("#single-menu li.menu-item").children("a");
        var aArray = [];
        for (var i = 0; i < navChildren.length; i++) {
            var aChild = navChildren[i];
            var ahref = $(aChild).attr('href');
            aArray.push(ahref);
        }

        $(window).on("scroll", function(){
            var windowPos = $(window).scrollTop();
            var windowHeight = $(window).height();
            var docHeight = $(document).height();
            for (var i = 0; i < aArray.length; i++) {
                var theID = aArray[i];
                var secPosition = $(theID).offset().top;
                secPosition = secPosition - 135;
                var divHeight = $(theID).height();
                divHeight = divHeight + 90;
                if (windowPos >= secPosition && windowPos < (secPosition + divHeight)) {
                    $("#single-menu a[href='" + theID + "']").parent().addClass("active");
                } else {
                    $("#single-menu a[href='" + theID + "']").parent().removeClass("active");
                }
            }
        });
    }


    $(".rs-heading h3").each(function() {
  
      // Some Vars
      var elText,
          openSpan = '<span class="first-word">',
          closeSpan = '</span>';
      
      // Make the text into array
      elText = $(this).text().split(" ");
      
      // Adding the open span to the beginning of the array
      elText.unshift(openSpan);
      
      // Adding span closing after the first word in each sentence
      elText.splice(2, 0, closeSpan);
      
      // Make the array into string 
      elText = elText.join(" ");
      
      // Change the html of each element to style it
      $(this).html(elText);
    });

   

  
   
    $(function(){ 
        $( "ul.children" ).addClass( "sub-menu" );
    });
    
   
    //type writer
        $(".rs-banner .cd-words-wrapper p:first-child").addClass("is-visible");


    // collapse hidden
    $(function(){ 
         var navMain = $(".navbar-collapse"); // avoid dependency on #id
         // "a:not([data-toggle])" - to avoid issues caused
         // when you have dropdown inside navbar
         navMain.on("click", "a:not([data-toggle])", null, function () {
             navMain.collapse('hide');
         });

     });



    //Start horizontal timeline js
        var $index = $('#index'),
          $wrap = $('#wrap-list'),
          $wrap_index = $('#wrap-index'),
          $list = $('#list'),
          $items = $('> li', $list),
          n = $items.length,
          $btn_prev = $('[data-toggle=prev]'),
          $btn_next = $('[data-toggle=next]');

      // modify style
      $items.css({
        width: (100/n) + '%'
      });
      $list.css({
        width: n*100 + '%'
      }).removeClass('hide');
      var i_padding = $wrap_index.width();
      $index.css({
        width: n*200 + i_padding*2 + 'px',
        'padding-left': i_padding + 'px',
        'padding-right': i_padding + 'px',
      });

      function goToStep(step){
        var $i_active = $('li', $index).removeClass('active').eq(step).addClass('active');
        $items.removeClass('show-me').eq(step).addClass('show-me');
        $list.css({
          'margin-left': -step*100 + '%'
        });
        $('html, body').scrollLeft(0);

        //
        $btn_prev.add($btn_next).removeClass('disabled');
        if (step == 0){
          $btn_prev.addClass('disabled');
        }
        if (step == n - 1){
          $btn_next.addClass('disabled');
        }
        
        // scroll wrap index to center active
        $wrap_index.animate({
          scrollLeft: $i_active.position().left - $wrap_index.width()/2 + 100
        }, 300);
      }

      // events
      $('a', $index).on('click', function(){
        var $li = $(this).parent();
        if ($li.hasClass('active')){
          return false;
        }
        // step want to go next
        var step  = $('li', $index).index($li);
        goToStep(step);
        return false;
      }).eq(0).trigger('click');

      $btn_prev.on('click', function(){
        var $li = $('li.active', $index).prev('li');
        if ($li.length){
          $('a', $li).trigger('click');
        }
        return false;
      });

      $btn_next.on('click', function(){
        var $li = $('li.active', $index).next('li');
        if ($li.length){
          $('a', $li).trigger('click');
        }
        return false;
      });
  //End horizontal timeline js


    //CountDown Timer
    var CountTimer = $('.CountDownTimer3');
    if(CountTimer.length){ 
        $(".CountDownTimer3").TimeCircles({
            fg_width: 0.030,
            bg_width: 0.8,
            circle_bg_color: events_data.ev_circle_bg_color,
            time: {
                Days:{
                    color: events_data.ev_days_color
                },
                Hours:{
                    color: events_data.ev_hours_color
                },
                Minutes:{
                    color: events_data.ev_min_color
                },
                Seconds:{
                    color: events_data.ev_sec_color
                }
            }
        }); 
    } 

    //Select box wrap css
    $( ".mptt-shortcode-wrapper .mptt-navigation-select" ).wrap( "<div class='mptt-select'></div>" ); 



    if ($('div').hasClass('openingfoot')) {
        $('body').addClass('openingfootwrap');
    }
   


    //CountDown Timer
    var CountTimer = $('.CountDownTimer4');
    if(CountTimer.length){ 
        $(".CountDownTimer4").TimeCircles({
            
        }); 
    }

  //preloader
    $(window).on( 'load', function() {
        $("#kaouwa-load").delay(1500).fadeOut(500);
        $(".kaouwa-loader").delay(1500).fadeOut(500);
        
        

    if($(window).width() < 992) {
      $('.rs-menu').css('height', '0');
      $('.rs-menu').css('opacity', '0');
      $('.rs-menu').css('z-index', '-1');
      $('.rs-menu-toggle').on( 'click', function(){
         $('.rs-menu').css('opacity', '1');
         $('.rs-menu').css('z-index', '1');
     });
    }
    })
    //service carousel
    if ($('.project-single-carousel').length) {
        $('.project-single-carousel').owlCarousel({
            loop:true,
            margin: 20,
            arrows: true,
            autoplay: true,
            nav:true,
            dots: false,
            navText : ["<i class='glyph-icon flaticon-left-arrow'></i>","<i class='glyph-icon flaticon-right-arrow'></i>"],
            responsive:{
                0:{
                    items:1
                },
                767:{
                    items:2
                },
                991:{
                    items:2
                },
                1199:{
                    items:4
                }
            }
        });
    }
        
     
    // scrollTop init
    var win=$(window);
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

   
    $(function(){ 
        $( "ul.children" ).addClass( "sub-menu" );
    });

    $(".sidenav .menu li").on('click', function() {
        $(this).children("ul.sub-menu").slideToggle();
    }); 
    $( ".comment-body, .comment-respond" ).wrap( "<div class='comment-full'></div>" ); 



     
  //For Video
  $('.rs-video-2').ready(function(){
      var btnBg     = $(this).find(".popup-videos").data('bg');
      var iconColor = $(this).find(".popup-videos i").data('icolor');

      $( "<style>.rs-video-2 .popup-videos:before { background: " + btnBg + " }</style>" ).appendTo( "head" )
      $( "<style>.rs-video-2 .popup-videos i:before { color: " + iconColor + " }</style>" ).appendTo( "head" )
  });

  //for button
  $(".rs-btn a").on({
       mouseenter: function(){
            var btnBg = $(this).data('onhoverbg');            
            var btnBorder = $(this).data('onhoverbg');            
            var btnColor = $(this).data('onhovercolor');            

            $(this).css('background-color', btnBg);
            $(this).css('border-color', btnBorder);
            $(this).css('color', btnColor);
        },
        mouseleave: function(){
            var btnHoverBg = $(this).data('onleavebg');
            var btnBorder = $(this).data('bordercolor');
            var btnHoverColor = $(this).data('onleavecolor');

            $(this).css('background-color', btnHoverBg);
            $(this).css('border-color', btnBorder); 
            $(this).css('color', btnHoverColor);   
        }      
  }, this);

  $(".rs-btn2 a").on({
       mouseenter: function(){
            var btnBg = $(this).data('onhoverbg');            
            var btnBorder = $(this).data('onhoverbg');            
            var btnColor = $(this).data('onhovercolor');            

            $(this).css('background-color', btnBg);
            $(this).css('border-color', btnBorder);
            $(this).css('color', btnColor);
        },
        mouseleave: function(){
            var btnHoverBg = $(this).data('onleavebg');
            var btnBorder = $(this).data('bordercolor');
            var btnHoverColor = $(this).data('onleavecolor');

            $(this).css('border-color', btnBorder); 
            $(this).css('color', btnHoverColor);   
        }      
  }, this);

  $(".rs-cta .button-wrap a").on({
       mouseenter: function(){
            var btnBg = $(this).data('onhoverbg');            
            var btnBorder = $(this).data('onhoverbg');            
            var btnColor = $(this).data('onhovercolor');            

            $(this).css('background-color', btnBg);
            $(this).css('border-color', btnBorder);
            $(this).css('color', btnColor);
        },
        mouseleave: function(){
            var btnHoverBg = $(this).data('onleavebg');
            var btnBorder = $(this).data('bordercolor');
            var btnHoverColor = $(this).data('onleavecolor');

            $(this).css('background-color', btnHoverBg);
            $(this).css('border-color', btnBorder); 
            $(this).css('color', btnHoverColor);   
        }      
  }, this);


    //woocommerce quantity style
    if ( ! String.prototype.getDecimals ) {
          String.prototype.getDecimals = function() {
              var num = this,
                  match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
              if ( ! match ) {
                  return 0;
              }
              return Math.max( 0, ( match[1] ? match[1].length : 0 ) - ( match[2] ? +match[2] : 0 ) );
          }
      }
    // Quantity "plus" and "minus" buttons
    $( document.body ).on( 'click', '.plus, .minus', function() {
        var $qty        = $( this ).closest( '.quantity' ).find( '.qty'),
            currentVal  = parseFloat( $qty.val() ),
            max         = parseFloat( $qty.attr( 'max' ) ),
            min         = parseFloat( $qty.attr( 'min' ) ),
            step        = $qty.attr( 'step' );

        // Format values
        if ( ! currentVal || currentVal === '' || currentVal === 'NaN' ) currentVal = 0;
        if ( max === '' || max === 'NaN' ) max = '';
        if ( min === '' || min === 'NaN' ) min = 0;
        if ( step === 'any' || step === '' || step === undefined || parseFloat( step ) === 'NaN' ) step = 1;

        // Change the value
        if ( $( this ).is( '.plus' ) ) {
            if ( max && ( currentVal >= max ) ) {
                $qty.val( max );
            } else {
                $qty.val( ( currentVal + parseFloat( step )).toFixed( step.getDecimals() ) );
            }
        } else {
            if ( min && ( currentVal <= min ) ) {
                $qty.val( min );
            } else if ( currentVal > 0 ) {
                $qty.val( ( currentVal - parseFloat( step )).toFixed( step.getDecimals() ) );
            }
        }

        // Trigger change event
        $qty.trigger( 'change' );
    });

})(jQuery);  