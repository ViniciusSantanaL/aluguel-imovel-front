(function($) {
    'use strict';

    const nav_offset_top = $('header').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function() {
                const scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area').addClass('navbar_fixed');
                } else {
                    $('.header_area').removeClass('navbar_fixed');
                }
            });
        }
    }
    navbarFixed();
})(jQuery);