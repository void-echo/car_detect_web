(function( $ ) {
	
	$.fn.onePgaeNav = function( options ){

		var settings = $.extend({
			activeClass		: 'active',
			wrapper			: '', 		// Nav wrapper selector for scroll effect
			speed 			: 900,		// animation speed
			navStop 		: 60,		// stop before top
			navStart 		: 200,		// change class before navstart pixel

		}, options ),
		$that = $(this);

		$(this).on( 'click' , clickScroll );

		if (settings.wrapper) {
			$(window).on('scroll',function(){
				var sectionTop 	= [],
				windowTop 	= $(window).scrollTop();

				$that.each(function(){
					var hash = $(this).attr('href'),
						hashOffset = $( hash ).offset();
					if (typeof hashOffset !== 'undefined' ) {
						sectionTop.push( hashOffset.top);
					};
				});

				$.each( sectionTop, function(index){
					if ( windowTop > sectionTop[index] - settings.navStart ){
						$that.removeClass(settings.activeClass)
							.eq(index).addClass(settings.activeClass);
					}
				});
			});
		};

		function clickScroll(event){
			event.preventDefault();

			var hash 		= $(this).attr('href'),
				hashOffset 	= $(hash).offset(),
				hashTop 	= hashOffset.top;

			$('html, body').animate({
				scrollTop: hashTop - settings.navStop
			}, settings.speed);
		}

	};

}(jQuery));