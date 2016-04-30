$(document).ready(function () {

    $("head").append("<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,700|Open+Sans+Condensed:700|Ubuntu:400,300|Roboto+Condensed:400,300' rel='stylesheet' type='text/css'>");

    $("head").append("<link rel='stylesheet' type='text/css' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css' />");


    $('.item').magnificPopup({type: 'image'});

    $('.fade').slick({
        speed: 500,
        fade: true,
        dots: true,
        arrows: false,
        cssEase: 'linear'
    });

    $('.responsive').slick({
        dots: false,
        arrows: true,
        nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    arrows: true,
                    dots: false
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


    $('input[type=checkbox]').css({'opacity': 0});

    $('input[type=checkbox]').css({'opacity': 0}).wrap('<span class="wrap-checkbox"></span>');

    $('.wrap-checkbox').click(function () {
        $(this).toggleClass("active");
    });

    $("#menu ul").hide();
    $("#menu li a").click(function () {
        $("#menu ul:visible").slideUp("normal");
        if (($(this).next().is("ul")) && (!$(this).next().is(":visible"))) {
            $(this).next().slideDown("normal");
        }
        $('#menu li a').removeClass("active");
        $(this).addClass("active");
    });

    $("#left_menu ul").hide();
    $("#left_menu li a").click(function () {
        $("#left_menu ul:visible").slideUp("normal");
        if (($(this).next().is("ul")) && (!$(this).next().is(":visible"))) {
            $(this).next().slideDown("normal");
        }
        $('#left_menu li a').removeClass("active");
        $(this).addClass("active");
    });

    $(".menu-collapsed").click(function () {
        $(this).toggleClass("menu-expanded");
    });

});

$(function () {
    $('.acc_ctrl').on('click', function (e) {
        e.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).next()
                .stop()
                .slideUp(300);
        } else {
            $(this).addClass('active');
            $(this).next()
                .stop()
                .slideDown(300);
        }
    });
});
