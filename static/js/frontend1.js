(function ($) {
    "use strict";
    
    var getElementSettings = function( $element ) {
		var elementSettings = {},
			modelCID 		= $element.data( 'model-cid' );

		if ( isEditMode && modelCID ) {
			var settings 		= elementorFrontend.config.elements.data[ modelCID ],
				settingsKeys 	= elementorFrontend.config.elements.keys[ settings.attributes.widgetType || settings.attributes.elType ];

			jQuery.each( settings.getActiveControls(), function( controlKey ) {
				if ( -1 !== settingsKeys.indexOf( controlKey ) ) {
					elementSettings[ controlKey ] = settings.attributes[ controlKey ];
				}
			} );
		} else {
			elementSettings = $element.data('settings') || {};
		}

		return elementSettings;
	};

    var isEditMode		= false; 

       var InstaFeedPopupHandler = function ($scope, $) {
        var widget_id					= $scope.data('id'),
			instafeed_elem              = $scope.find('.pp-instagram-feed').eq(0),
			elementSettings				= getElementSettings( $scope ),
            settings                    = instafeed_elem.data('settings'),
            taregt_id					= settings.target,
            pp_popup                    = settings.popup,
            layout                    	= elementSettings.feed_layout,
            likes                    	= elementSettings.insta_likes,
            comments                    = elementSettings.insta_comments,
            icons_style                 = (elementSettings.icons_style === 'outline') ? '-o' : '',
            like_span                   = (likes === 'yes') ? '<span class="likes"><i class="pp-if-icon fa fa-heart' + icons_style + '"></i> {{likes}}</span>' : '',
            comments_span               = (comments === 'yes') ? '<span class="comments"><i class="pp-if-icon fa fa-comment' + icons_style + '"></i> {{comments}}</span>' : '',
            $more_button                = instafeed_elem.find('.pp-load-more-button');
		
		var $slider_options;
		
		if (layout === 'carousel') {
			var $carousel       = $scope.find('.swiper-container').eq(0),
				$slider_options = JSON.parse( $carousel.attr('data-slider-settings') );
		}
		
		if ( elementSettings.use_api === 'yes' ) {
			if ( settings.user_id && settings.access_token ) {
				var feed = new Instafeed({
					get:                    'user',
					userId:                 settings.user_id,
					sortBy:                 settings.sort_by,
					accessToken:            settings.access_token,
					limit:                  settings.images_count,
					target:                 taregt_id,
					resolution:             settings.resolution,
					orientation:            'portrait',
					template:               function () {
						if (pp_popup === '1') {
							if (layout === 'carousel') {
								return '<div class="pp-feed-item swiper-slide"><div class="pp-feed-item-inner"><a href="{{image}}"><div class="pp-if-img"><div class="pp-overlay-container">' + like_span + comments_span + '</div><img src="{{image}}" /></div></a></div></div>';
							} else {
								return '<div class="pp-feed-item"><div class="pp-feed-item-inner"><a href="{{image}}"><div class="pp-if-img"><div class="pp-overlay-container">' + like_span + comments_span + '</div><img src="{{image}}" /></div></a></div></div>';
							}
						} else {
							if (layout === 'carousel') {
								return '<div class="pp-feed-item swiper-slide"><div class="pp-feed-item-inner">' +
									'<a href="{{link}}">' +
										'<div class="pp-if-img">' +
										'<div class="pp-overlay-container">' + like_span + comments_span + '</div>' +
										'<img src="{{image}}" />' +
										'</div>' +
									'</a>' +
									'</div></div>';
							} else {
								return '<div class="pp-feed-item"><div class="pp-feed-item-inner">' +
									'<a href="{{link}}">' +
										'<div class="pp-if-img">' +
										'<div class="pp-overlay-container">' + like_span + comments_span + '</div>' +
										'<img src="{{image}}" />' +
										'</div>' +
									'</a>' +
									'</div></div>';
							}
						}
					}(),
					after: function () {
						if (layout === 'carousel') {
							var mySwiper        = new Swiper($carousel, $slider_options);
						}
						if (layout === 'masonry') {
							var grid = $('#pp-instafeed-' + widget_id).imagesLoaded( function() {
								grid.masonry({
									itemSelector: '.pp-feed-item',
									percentPosition: true
								});
							});
						}
						if (!this.hasNext()) {
							$more_button.attr('disabled', 'disabled');
						}
					},
					success: function() {
						$more_button.removeClass( 'pp-button-loading' );
						$more_button.find( '.pp-load-more-button-text' ).html( 'Load More' );
					}
				});
				
				

				$more_button.on('click', function() {
					feed.next();
					$more_button.addClass( 'pp-button-loading' );
					$more_button.find( '.pp-load-more-button-text' ).html( 'Loading...' );
				});

				feed.run();

				if (pp_popup === '1') {
					$(taregt_id).each(function () {
						$(this).magnificPopup({
							delegate: 'div a', // child items selector, by clicking on it popup will open
							gallery: {
								enabled: true,
								navigateByImgClick: true,
								preload: [0, 1]
							},
							type: 'image'
						});
					});
				}
			}
		} else {
			var pp_feed = new PPInstagramFeed({
					id: widget_id,
					username: elementSettings.username,
					layout: layout,
					limit: settings.images_count,
					likes_count: (likes === 'yes'),
					comments_count: (comments === 'yes'),
					carousel: $slider_options,
				});
		}
    };

    var TwitterTimelineHandler = function ($scope, $) {
		$(document).ready(function () {
			if ('undefined' !== twttr) {
				twttr.widgets.load();
			}
		});
	}; 
	 
    var CounterUpHandler = function ($scope, $) {
        if ($('.rs-counter').length) {
            $('.rs-counter').counterUp({
                delay: 20,
                time: 1500
            });
        }
    };

    $(window).on('elementor/frontend/init', function () {
        if ( elementorFrontend.isEditMode() ) {
			isEditMode = true;
		}     
        elementorFrontend.hooks.addAction('frontend/element_ready/pp-instafeed.default', InstaFeedPopupHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/rs-twitter-timeline.default', TwitterTimelineHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/counter-top-area.default', CounterUpHandler);
       
    });
    
}(jQuery));