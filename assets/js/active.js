(function($) {
    'use strict';

    if ($.fn.menumaker) {
        $("#cssmenu").menumaker({
            title: "Menu",
            breakpoint: 768,
            format: "multitoggle"
        });
    }
    if ($.fn.slick) {
        $('.brand-slider-active').slick({
            slidesToShow: 5,
            loop: true,
            slidesToScroll: 1,
            speed: 1000,
            prevArrow: '<div class="prev-arrow"><i class="fa fa-angle-left"></i></div>',
            nextArrow: '<div class="next-arrow"><i class="fa fa-angle-right"></i></div>',
            autoplay: true,
            responsive: [{
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 780,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        $('.testimonial-slider-active').slick({
            slidesToScroll: 1,
            slidesToShow: 1,
            loop: true,
            speed: 1000,
            arrows: false,
            dots: true,
            autoplay: true,
            fade: true,
        });
        $('.project-gallery-slider').slick({
            slidesToScroll: 1,
            slidesToShow: 1,
            loop: true,
            speed: 1000,
            arrows: false,
            dots: true,
            autoplay: true,
            fade: true,
        });
        $('.blog-slider-active').slick({
            slidesToScroll: 1,
            slidesToShow: 3,
            loop: true,
            speed: 1000,
            arrows: false,
            dots: true,
            autoplay: true,
            responsive: [{
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 780,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        $('.team-slider-active').slick({
            slidesToScroll: 1,
            slidesToShow: 4,
            loop: true,
            speed: 1000,
            arrows: false,
            dots: false,
            autoplay: true,
            responsive: [{
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 780,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        $('.recent-wrok-slider').slick({
            slidesToScroll: 1,
            slidesToShow: 3,
            loop: true,
            speed: 1000,
            arrows: false,
            dots: true,
            autoplay: true,
            responsive: [{
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 780,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        $('.services-slider').slick({
            slidesToScroll: 1,
            slidesToShow: 3,
            loop: true,
            speed: 1000,
            arrows: false,
            dots: true,
            autoplay: true,
            responsive: [{
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 780,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        $('.feedback-slider').slick({
            slidesToScroll: 1,
            slidesToShow: 2,
            loop: true,
            speed: 1000,
            arrows: false,
            dots: true,
            autoplay: true
        });
    }
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    }
    // 3. Style a DIV and chage cursor color:

    $("body").niceScroll({
        cursorcolor: "#ffa100",
        cursorwidth: '10px',
        zindex: 5,
        scrollspeed: 20,
        cursorborder: '1px solid #ffa100'
    });

    if ($.fn.isotope) {
        $(".projectactive").isotope({
            filter: '*',
        });
        $('.project-nav ul li').on('click', function() {
            $(".project-nav ul li").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr('data-filter');
            $(".projectactive").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });
            return false;
        });
    }

    jQuery(window).on('scroll', function() {
        var topspace = $(this).scrollTop();
        if (topspace > 1) {
            $('.menu-area').addClass("sticky-menu");
        } else {
            $('.menu-area').removeClass("sticky-menu");
        }
    });

    jQuery(window).on('load', function() {
        $('#preloader').fadeOut('slow', function() {
            $(this).remove();
        });
    });
    $('.search-form i.fa').on('click', function() {
        $('.searchbox').toggleClass('open');
        return false;
    });
    if ($.fn.magnificPopup) {
        $('.videopopup').magnificPopup({
            type: 'iframe'
        });
    }

})(jQuery);
