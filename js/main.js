//load
$(window).on('load', function() {
    $('#preloader').delay(700).fadeToggle(500);

});
$(window).on('load', function() {
    function anims() {
        $('.start-anim').addClass('anim');
    }
    setTimeout(anims, 1000);
});


$(document).scroll(function() {
    var WinTop = $(window).scrollTop();
    var docHeight = $(window).height();

    $('.fadeEl').each(function() {
        var topIn = $(this).offset().top - docHeight * 0.80;
        if (WinTop > topIn) {
            $(this).addClass('anim');
        }
    });

    $('.animation').each(function() {
        var topIn = $(this).offset().top - docHeight * 0.80;
        if (WinTop > topIn) {
            $(this).addClass('start-animation');
        }
    });

});


// Menu
$(document).on("ready", function() {
    $(".menu .trigger-menu").click(function() {
        $(this).toggleClass('op');
        $(".menu").toggleClass("menu-open");
        $('.menu .hamburger-menu__bar').toggleClass('animate');
        $('.page__header').toggleClass('menu-open');
    });
});

// tariff select
$(document).on("ready", function() {
    $(".tariff__item").click(function() {
        $(".tariff__item").removeClass('tariff__item_active');
        $(this).addClass('tariff__item_active');
    });
});

//dropdown
$(document).ready(function() {
    $(".dropdown__btn").click(function() {
        $(this).siblings(".dropdown__list").slideToggle('medium');
    });
});

// anchor
$('.anchor').on('click', function() {
    var href = $(this).attr('href');
    $('.anchor').removeClass('active');
    $(this).addClass('active');
    $('html, body').animate({
        scrollTop: $(href).offset().top - 180
    }, {
        duration: 370,
        easing: "linear"
    });
    return false;
});

// lk-message__close
$(document).ready(function() {
    $(".lk-message__close").click(function() {
        $(this).parent(".lk-message__item").addClass('none');
    });
});
//dropdown lk-menu__header
$(document).ready(function() {
    $(".notification").hover(function() {
        $(this).toggleClass('active');
    });
});


// adaptive
$(document).on("ready", function() {
    if (window.innerWidth <= 1367) {

        //dropdown lk-menu__header
        $(document).ready(function() {
            $(".lk-menu").click(function() {
                $(this).toggleClass('active');
                $('.lk-menu__header .hamburger-menu__bar').toggleClass('animate');
            });
        });

        // lk-statistics__slider
        $(".lk-statistics__slider").addClass('swiper-container');
        $(".lk-statistics__slider-row").addClass('swiper-wrapper');
        $(".lk-statistics__slider .swiper-wrapper").removeClass('lk-statistics__slider-row');
        $(".lk-statistics__slider-item").addClass('swiper-slide');


        var lk_statistics = new Swiper(".lk-statistics__slider", {
            slidesPerView: 2,
            spaceBetween: 15,
            pagination: {
                el: '.lk-statistics__slider .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                600: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
            }
        });

        //		
        window.addEventListener("orientationchange", function() {
            swiper.update();
        }, false);

    } else {
        $("document").ready(function($) {
            $(window).scroll(function() {
                if ($(this).scrollTop() > 90) {
                    $('.page__header').addClass("fix");
                } else {
                    $('.page__header').removeClass("fix");
                }
            });
            $(".lk-header .lk-menu").hover(function() {
                $(this).toggleClass('active');
                $('.lk-menu__header .hamburger-menu__bar').toggleClass('animate');
            });
        });
    }
});