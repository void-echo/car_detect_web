(function($) {
    PPInstagramFeed = function(settings) {
        this.id = settings.id;
        this.username = 'undefined' !== typeof settings.username ? settings.username : '';
        this.byHashtag = 'undefined' !== typeof settings.byHashtag ? settings.byHashtag : !1;
        this.hashtag = 'undefined' !== typeof settings.hashtag ? settings.hashtag : '';
        this.settings = settings;
        this.host = 'https://www.instagram.com/';
        this.node = $('.elementor-element-' + this.id);
        this.wrapper = this.node.find('#pp-instafeed-' + this.id);
        this._data = !1;
        this._swiper = {};
        this._init()
    };
    PPInstagramFeed.prototype = {
        _data: !1,
        _swiper: {},
        _init: function() {
            if ('' === this.username && !this.settings.isBuilderActive) {
                console.error('PP Instagram Feed (' + this.id + '): No username provided.');
                return
            }
            var url = this.host + this.username + '/';
            this._getData(url, $.proxy(this._renderData, this))
        },
        _getData: function(url, callback) {
            if (this._data && 'function' === typeof callback) {
                callback(this._data);
                return
            }
            var self = this;
            $.get(url, function(data) {
                data = self._processData(data);
                if ('function' === typeof callback) {
                    callback(data)
                }
            }).fail(function(e) {
                console.error('PP Instagram Feed (' + self.id + '): Unable to fetch the given user. Instagram responded with the status code: ', e.status)
            })
        },
        _processData: function(data) {
            data = data.split("window._sharedData = ")[1].split("<\/script>")[0];
            data = JSON.parse(data.substr(0, data.length - 1));
            data = data.entry_data.ProfilePage || data.entry_data.TagPage;
            data = data[0].graphql.user || data[0].graphql.hashtag;
            this._data = data;
            return data
        },
        _renderData: function(data) {
            var html = '';
            var itemClass = 'pp-feed-item';
            if ('carousel' === this.settings.layout) {
                itemClass += ' swiper-slide'
            }
            if (data.is_private) {
                html = '<p>This account is private.</p>'
            } else {
                var imgs = (data.edge_owner_to_timeline_media || data.edge_hashtag_to_media).edges;
                var max = (imgs.length > this.settings.limit) ? this.settings.limit : imgs.length;
                for (var i = 0; i < max; i++) {
                    var url = "https://www.instagram.com/p/" + imgs[i].node.shortcode,
                        thumb, type, caption = '',
                        likes = imgs[i].node.edge_liked_by.count,
                        comments = imgs[i].node.edge_media_to_comment.count;
                    switch (imgs[i].node.__typename) {
                        case "GraphSidecar":
                            type = "sidecar"
                            thumb = imgs[i].node.thumbnail_resources[4].src;
                            break;
                        case "GraphVideo":
                            type = "video";
                            thumb = imgs[i].node.thumbnail_src
                            break;
                        default:
                            type = "image";
                            thumb = imgs[i].node.thumbnail_resources[4].src
                    }
                    if ('image' == type) {
                        image = 'square-grid' !== this.settings.layout ? imgs[i].node.display_url : thumb
                    } else {
                        image = thumb
                    }
                    if (imgs[i].node.edge_media_to_caption.edges.length > 0) {
                        caption = imgs[i].node.edge_media_to_caption.edges[0].node.text
                    }
                    html += '<div class="' + itemClass + '">';
                    html += '<div class="pp-feed-item-inner">';
                    if ('no' !== this.settings.on_click) {
                        var link = 'yes' === this.settings.on_click ? imgs[i].node.display_url : url;
                        html += '<a href="' + link + '" target="_blank" rel="nofollow noopener">'
                    }
                    html += '<div class="pp-if-img">';
                    html += '<div class="pp-overlay-container">';
                    if (this.settings.likes_count) {
                        html += '<span class="likes"><i class="pp-if-icon fa fa-heart"></i> ' + likes + '</span>'
                    }
                    if (this.settings.comments_count) {
                        html += '<span class="comments"><i class="pp-if-icon fa fa-comment"></i> ' + comments + '</span>'
                    }
                    html += '</div>';
                    html += '<img src="' + image + '" alt="' + caption + '" />'
                    html += '</div>';
                    if ('no' !== this.settings.on_click) {
                        html += '</a>'
                    }
                    html += '</div>';
                    html += '</div>';
                    html += '</div>'
                }
            }
            this.wrapper.html(html);
            if ('carousel' === this.settings.layout) {
                this._initCarousel()
            } else if ('masonry' === this.settings.layout) {
                this._initMasonry()
            } else {
                this._initGrid()
            }
        },
        _initGrid: function() {
            var grid = $('#pp-instafeed-' + this.id).imagesLoaded(function() {})
        },
        _initMasonry: function() {
            var grid = $('#pp-instafeed-' + this.id).imagesLoaded(function() {
                grid.masonry({
                    itemSelector: '.pp-feed-item',
                    percentPosition: !0
                })
            })
        },
        _initCarousel: function() {
            this._swiper = new Swiper('.elementor-element-' + this.id + ' .pp-instagram-feed-carousel .swiper-container', this.settings.carousel)
        }
    }
})(jQuery);