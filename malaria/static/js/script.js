/*======================================
            Preloader
======================================*/
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');

});
/*======================================
            Team
======================================*/
$(function() {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed:700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            //breakpoint from 0 up
            0: {
                items: 1
            },
            //breakpoint from 480 up
            480: {
                items:2
            }
        }
    });
});
/*======================================
            Progress Bars
======================================*/
$(function() {

    $("#progress-elements").waypoint(function() {

        
    $(".progress-bar").each(function() {
        $(this).animate ({
            width: $(this).attr("aria-valuenow") + "%"
        }, 1000);
    });
    
        this.destroy();

    }, {
        offset: 'bottom-in-view'
    });

});

/*======================================
            Responsive tabs
====================================*/
$(function () {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});
/*======================================
           Stat
====================================*/
$(function () {

    $(".counter").counterUp ({
        delay: 10,
        time: 2000
    });
});

/*======================================
           Navigation
====================================*/
/* Show & Hide White Navigation */
$ (function () {

    //show/hide nav on page load
    showHideNav();

    $(window).scroll(function() {
         //show/hide nav on window's scroll
        showHideNav();
        
    });
    function showHideNav() {
        
        if( $(window).scrollTop() > 50) {
            // Show White Nav
            $("nav").addClass("white-nav-top");

            // Show back to top button
            $("#back-to-top").fadeIn();

        } else {
            // Hide White Nav
            $("nav").removeClass("white-nav-top");

            // Hide back to top button
            $("#back-to-top").fadeOut();
        }
    }
});

// Smooth Scrolling
$(function () {
    $("a.smooth-scroll").click(function(event) {

        event.preventDefault();

        // get section id
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");

    });
});
/*======================================
           MOBILE MENU
=======================================*/
$(function () {

    // Show mobile nav
    $("#mobile-nav-open-btn").click(function() {
        $("#mobile-nav").css("height", "100%");
    });

    // Hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function() {
        $("#mobile-nav").css("height", "0%");
    });

})
/*======================================
           Animation
=======================================*/
//animate on scroll
$(function () {
    new WOW().init();
});

$(window).on('load', function () {
    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInUp");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");

});

    $(document).ready(function() {
        $('#home-btn-yes').click(function () {
            $(this).not(this).removeClass('click');
            $(this).toggleClass("click");
        })
    });














