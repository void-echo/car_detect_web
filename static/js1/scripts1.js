/*===animated===*/
var wow = new WOW(
    {
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: false // trigger animations on mobile devices (true is default)
    }
);
wow.init();

/*======one Page Nav =========*/
jQuery('.scroll').onePgaeNav({
  wrapper: '#onepage-nav'
});


/*======Jquery sticky top=========*/
jQuery(".header").sticky({ topSpacing: 0 });

/*======Back to Top=========*/
jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 100) {
        jQuery('.scrollup').fadeIn();
    } else {
        jQuery('.scrollup').fadeOut();
    }
});

jQuery('.scrollup').click(function () {
    jQuery("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
});

/*====== Owl Testinomials =========*/
jQuery(window).on("load", function () {
    $('#owl-testinomials').owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        nav: false,
        // mouseDrag: false,
        items: 1,
        mouseDrag: true,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true
    });
});


/*====== Slider =========*/
jQuery(document).ready(function () {
    $('#slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        mouseDrag: false,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
    });
});

/*====== Blog Gallery =========*/
jQuery(document).ready(function () {
    $('#blog-gallery').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        mouseDrag: false,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
    });
});


/*====== Related Blog =========*/
jQuery(document).ready(function () {
    $('#related-blog').owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        nav: false,
        mouseDrag: true,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });
});


/*=== Remove Class navigation for mobile navi ===*/
$(document).ready(function () {
    $(".navigation ul li a").click(function () {
        $(".navigation").removeClass("show");
    });
});

/*========= Loader =========*/
jQuery(window).on("load", function () {
  jQuery(".container-loader").delay(1500).fadeOut("slow");
});

/*========= Counter =========*/
jQuery(document).ready(function () {
    (function($) {
        $('.count-num').rCounter();
    })(jQuery);
});

/*========= MixItUp =========*/
$(document).ready(function () {
    // Instantiate MixItUp:
     $('.ourPortfolio').mixItUp({
         selectors: {
             target: '.portfolio-item'
         }
     });
 });

/*===Drop Down Menu ===*/
jQuery(document).ready(function() {
    jQuery('.navigation').meanmenu();
});

/*=== ParticlesJS ===*/
jQuery(document).ready(function() {
    particlesJS('particles-js',
    {
      "particles": {
        "number": {
          "value": 180,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 8
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 5,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true,
      "config_demo": {
        "hide_card": false,
        "background_color": "#b61924",
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
      }
    }
  );
});

/*=== Ripples js ===*/
jQuery(document).ready(function() {
  $('.rpbanner').ripples({
      resolution: 500,
      dropRadius: 20,
      perturbance: 0.04,
      });
      // Automatic drops
	setInterval(function() {
		var $el = $('.rpbanner');
		var x = Math.random() * $el.outerWidth();
		var y = Math.random() * $el.outerHeight();
		var dropRadius = 10;
		var strength = 0.02 + Math.random() * 0.04;

		$el.ripples('drop', x, y, dropRadius, strength);
	}, 200);
});

