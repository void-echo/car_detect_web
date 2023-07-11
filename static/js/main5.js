/**
*
* --------------------------------------------------------------------
*
* Template : Medicum – Psychology & Counseling WordPress Theme
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
        offset: 0
    });

    if(jQuery().niceScroll){
        if ($(window).width() > 991) {
           $('body, html').addClass('rs-scrollbar');
           $("body").niceScroll({
                cursorcolor: scroll_data.cursorcolor,
                horizrailenabled:false,
                cursorwidth: scroll_data.cursor_width,
                cursorminheight: scroll_data.cursorminheight, 
                scrollspeed: scroll_data.scrollspeed,
                mousescrollstep: scroll_data.mousescrollstep,
                autohidemode: 'false',
                cursorborder: "0px solid #fff", // css definition for cursor border
                cursorborderradius: "0px", // border radius in pixel for cursor
                background: scroll_data.rail_bg,
                overflowy: 'false'
            });
       }
    }
    $(".widget_nav_menu li a").filter(function(){
        return $.trim($(this).html()) == '';
    }).hide();

    // collapse hidden
    $(function(){ 
        var navMain = $(".navbar-collapse"); // avoid dependency on #id
         // when you have dropdown inside navbar
         navMain.on("click", "a:not([data-toggle])", null, function () {
             navMain.collapse('hide');
        });
     });

    
    // Mouse Pointer     
    if ($('.pointer-wrap').length) {
        const cursor = cursorDot({
            diameter: parseInt(pointer_data.diameter),
            borderWidth: parseInt(pointer_data.border_width),
            borderColor: String(pointer_data.pointer_border),
            easing: parseInt(pointer_data.speed),
            background: String(pointer_data.pointer_bg)           
        })
        cursor.over("a", {
            scale: parseFloat(pointer_data.scale)
        });       
    }

    $(".menu-area .navbar ul > li.menu-item-has-children").hover(
        function () {
            $(this).addClass('hover-minimize');
        },
        function () {
            $(this).removeClass("hover-minimize");
        }
    );


    $( ".showcase-item" ).hover(function() {
        $( this ).toggleClass("hover");
    });

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


    $('.nav-link-container').on('click', function(e){
        $('body.on-offcanvas').removeClass('on-offcanvas');
        setTimeout(function(){ $('body').addClass('on-offcanvas'); },500);        
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
    
    $("#rs-header ul > li.classic").hover(
        function () {
            $('body').addClass('mega-classic');
        },
        function () {
            $('body.mega-classic').removeClass("mega-classic");
        }
    );

    //Offcanvas js
    $(document).ready(function(){
        function resizeNav() {
            $(".menu-ofcn").css({"height": window.innerHeight});
            var radius = Math.sqrt(Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2));
            var diameter = radius * 2;
            $(".off-nav-layer").width(diameter);
            $(".off-nav-layer").height(diameter);
            $(".off-nav-layer").css({"margin-top": -radius, "margin-left": -radius});
        }
        $(".menu-button, .close-button, .offwrap").on('click', function() {
            $(".nav-toggle, .menu-ofcn, .close-button, body").toggleClass("off-open");
        });
        $(window).resize(resizeNav);
        resizeNav();
    });


    // One page menu js

    if ($('.page-template-page-single-php .nav, .page-template-page-single2-php .nav').length) {
        $('#single-menu li:first-child, .sidenav li:first-child').addClass('active');
        $('#single-menu a, .sidenav a').on('click', function(){
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              $('#single-menu li, .sidenav li').removeClass('active');
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
                secPosition = secPosition - 100;
                var divHeight = $(theID).height();
                divHeight = divHeight + 10;
                if (windowPos >= secPosition && windowPos < (secPosition + divHeight)) {
                    $("#single-menu a[href='" + theID + "']").parent().addClass("active");
                } else {
                    $("#single-menu a[href='" + theID + "']").parent().removeClass("active");
                    $("body, .menu-wrap-off").removeClass("off-open");
                }
            }
        });
    }

    // Canvas Menu Js
    $( ".nav-link-container > a" ).off("click").on("click", function(event){
        event.preventDefault();
    });

    
    // Get a quote popup

    $('.popup-quote').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#qname',
        removalDelay: 500, //delay removal by X to allow out-animation
        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#qname';
                }
            }
        }
    });

    // Magnific Popup Box

    var rsaddon_PRObox = $('.rsaddon_pro_box');
    if(rsaddon_PRObox.length) {
        $('.rsaddon_pro_box').magnificPopup({
            delegate: '.pointer-events',
            removalDelay: 500, 
            callbacks: {
                beforeOpen: function() {
                   this.st.mainClass = this.st.el.attr('data-effect');
                }
            },
            midClick: true 
        });
    }


    // Portfolio Single Carousel
    if ($('.portfolio-carousel').length) {
        $('.portfolio-carousel').owlCarousel({
            loop: true,
            nav:true,
            autoHeight:true,
            items:1
        })
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

    
    // blog init

     $(".blog-carousel").each(function() {
        var options = $(this).data('carousel-options');
        $(this).owlCarousel(options); 
    });

    $(function(){ 
        $( "ul.children" ).addClass( "sub-menu" );
    });

    $(".rs-products-grid .product-btn .button").addClass("glyph-icon flaticon-shopping-bag");
    
     //Videos popup jQuery activation code
    $('.popup-videos, .popup-border').magnificPopup({
        disableOn: 10,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });




    // collapse hidden
    $(function(){ 
        var navMain = $(".navbar-collapse"); // avoid dependency on #id
            // "a:not([data-toggle])" - to avoid issues caused
            // when you have dropdown inside navbar
            navMain.on("click", "a:not([data-toggle])", null, function () {
            navMain.collapse('hide');
        });
    });


    //Select box wrap css
    $(".menu-area .navbar ul > li.mega > ul.sub-menu").wrapInner("<div class='container flex-mega'></div>");
    $('.menu-area .navbar ul > li.mega > ul.sub-menu li').first().addClass('first-li-item');


    if ($('div').hasClass('openingfoot')) {
        $('body').addClass('openingfootwrap');
    }

    if ($('body').hasClass('page-template-page-single2')) {
        $('body').addClass('page-template-page-single page-template-page-single-php');
    }
       
    /*----------------------------
        # swiper Screen Slider
    ------------------------------ */
    if ($('.swiper-container.screnshots').length) {
        var swiper = new Swiper('.swiper-container.screnshots', {
            spaceBetween: 30,
            slidesPerGroup: 1,
            slidesPerView: 4,
            loop: true,
            loopFillGroupWithBlank: true,
            centeredSlides: false,
            mousewheel: false,
            direction: 'horizontal',
            grabCursor: false,
            autoplay: {
                delay: 200000,
                disableOnInteraction: true,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.next',
                prevEl: '.prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                481: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                576: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            }
        });
    }

    if ($('.swiper-container').length) {
        $(".swiper-container").hover(function() {
            (this).swiper.autoplay.stop();
        }, function() {
            (this).swiper.autoplay.start();
        });
    }

    /*----------------------------
        # swiper Pricing Slider
    ------------------------------ */

    if ($('.swiper-container.pricing').length) {
        var swiper = new Swiper('.swiper-container.pricing', {
            spaceBetween: 0,
            slidesPerGroup: 1,
            slidesPerView: 3,
            loop: true,
            loopFillGroupWithBlank: true,
            centeredSlides: true,
            mousewheel: false,
            direction: 'horizontal',
            grabCursor: false,
            autoplay: {
                delay: 2000000,
                disableOnInteraction: true,
            },
            navigation: {
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                481: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                576: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                },
            }
        });
    }

  //preloader
    $(window).on( 'load', function() {
        $("#pre-load").delay(600).fadeOut(500);
        $(".pre-loader").delay(600).fadeOut(500);
        
        

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

    // image loaded portfolio init
    if ($('.grid').length) {
        $('.grid').imagesLoaded(function() {
            $('.portfolio-filter').on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            var $grid = $('.grid').isotope({

                animationOptions: {
                 duration: 750,
                 easing: 'linear',
                 queue: false
               },

                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.grid-item',
                }
            });
        });
    }
            
    // portfolio Filter
    $('.portfolio-filter button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });
    

     // magnificPopup init
    $('.image-popup').magnificPopup({
        type: 'image',
        callbacks: {
            beforeOpen: function() {
               this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated zoomInDown');
            }
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return '<div class="gallery-title-wrap"><h3>' + item.el.attr('title') + '</h3>' + '<p>' + item.el.attr('caption') + '</p></div>';
            }
        },
        gallery: {
            enabled: true
        }
    });



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
        
    // Counter Up  
    $('.rs-counter').counterUp({
        delay: 20,
        time: 1500
    });
    
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

    $( ".comment-body, .comment-respond" ).wrap( "<div class='comment-full'></div>" ); 
    $('.rs-heading .description p:empty').remove();




/******** Mobile Menu Start ********/
    $('.menu-wrap-off a').each(function(){
        var href = $(this).attr("href");
        if(href == "#"){
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
            mobile_menu.find(".has-sub").prepend('<span class="submenu-button"></span>');
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
        $("#mobile_menu").menumaker({
        format: "multitoggle"
        });
    });
    /******** Mobile Menu End ********/   

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

    // Select Box Style
    var x, i, j, l, ll, selElmnt, a, b, c;
    /*look for any elements with the class "Services":*/
    x = document.getElementsByClassName("Services");
    l = x.length;
    for (i = 0; i < l; i++) {
      selElmnt = x[i].getElementsByTagName("select")[0];
      ll = selElmnt.length;
      /*for each element, create a new DIV that will act as the selected item:*/
      a = document.createElement("DIV");
      a.setAttribute("class", "select-selected");
      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
      x[i].appendChild(a);
      /*for each element, create a new DIV that will contain the option list:*/
      b = document.createElement("DIV");
      b.setAttribute("class", "select-items select-hide");
      for (j = 1; j < ll; j++) {
        /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            /*when an item is clicked, update the original select box,
            and the selected item:*/
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
              if (s.options[i].innerHTML == this.innerHTML) {
                s.selectedIndex = i;
                h.innerHTML = this.innerHTML;
                y = this.parentNode.getElementsByClassName("same-as-selected");
                yl = y.length;
                for (k = 0; k < yl; k++) {
                  y[k].removeAttribute("class");
                }
                this.setAttribute("class", "same-as-selected");
                break;
              }
            }
            h.click();
        });
        b.appendChild(c);
      }
      x[i].appendChild(b);
      a.addEventListener("click", function(e) {
          /*when the select box is clicked, close any other select boxes,
          and open/close the current select box:*/
          e.stopPropagation();
          closeAllSelect(this);
          this.nextSibling.classList.toggle("select-hide");
          this.classList.toggle("select-arrow-active");
        });
    }
    function closeAllSelect(elmnt) {
      /*a function that will close all select boxes in the document,
      except the current select box:*/
      var x, y, i, xl, yl, arrNo = [];
      x = document.getElementsByClassName("select-items");
      y = document.getElementsByClassName("select-selected");
      xl = x.length;
      yl = y.length;
      for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
          arrNo.push(i)
        } else {
          y[i].classList.remove("select-arrow-active");
        }
      }
      for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
          x[i].classList.add("select-hide");
        }
      }
    }
    /*if the user clicks anywhere outside the select box,
    then close all select boxes:*/
    document.addEventListener("click", closeAllSelect);

})(jQuery);  