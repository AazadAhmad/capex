// menu active
jQuery(".nav > li > a").each(function() {   
    if (this.href == window.location.href) {
        jQuery(this).addClass("active-nav");
    }
});


$(document).ready(function () {
    // scroll to top function
    $(".scroll-to-top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000)
    });
});


// sticky header
function stickyHeader () {
    if ($('.stricky').length) {
        var strickyScrollPos = 100;
        if($(window).scrollTop() > strickyScrollPos) {
            $('.stricky').removeClass('slideIn animated');
            $('.stricky').addClass('stricky-fixed fadeInDown animated');
        }
        else if($(this).scrollTop() <= strickyScrollPos) {
            $('.stricky').removeClass('stricky-fixed fadeInDown animated');
            $('.stricky').addClass('slideIn animated');
        }
    };
}

// instance of fuction while Window Scroll event
jQuery(window).on('scroll', function () {   
    (function ($) {
        stickyHeader();
    })(jQuery);
});


$('.dropdown-toggle').dropdown();