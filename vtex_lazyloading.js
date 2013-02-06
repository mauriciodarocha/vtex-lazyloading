var _vtex_lazyloading = {
  container: '.shelf-image-container',
  width:208,
  height:208,
  init: function () {
    _vtex_lazyloading.set.imgs();
  },
  set: {
    imgs: function () {
      var _src, _img;
      jQuery(_vtex_lazyloading.container + ":not('._vtex_lazy_applied')").each(function (ndx, item) {
        _src = jQuery(item).find('noscript').text().match(/src="(.*?)"/)[1];
        if (_src != "") {
          _img = jQuery("<img/>", {
            "data-src": _src
          }).addClass('_lazy').addClass('_lazy-' + ndx).attr("height", _vtex_lazyloading.height).attr("width", _vtex_lazyloading.width);
          jQuery(item).addClass("_vtex_lazy_applied").prepend(_img);
        }
      });
      _vtex_lazyloading.img.check();
      _vtex_lazyloading.set.event.scroll();
    },
    event: {
      scroll: function () {
        jQuery(document).scroll(function () {
          _vtex_lazyloading.img.check();
        });
      }
    }
  },
  img: {
    is_visible: function (e) {
      var rect = e[0].getBoundingClientRect();
      return (rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth);
    },
    check: function () {
      var _current_img, _src;
      jQuery(_vtex_lazyloading.container + ":not('._loaded')").each(function (ndx, item) {
        _current_img = jQuery(item).find("img");
        if (_vtex_lazyloading.img.is_visible(_current_img)) {
          _src = jQuery(_current_img).attr("data-src");
          jQuery(_current_img).attr("src", _src);
          jQuery(item).addClass("_loaded");
        }
      });
    }
  }
};

jQuery(document).ready(function () {
  _vtex_lazyloading.init();
});

