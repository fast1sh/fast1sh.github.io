if (window.matchMedia("(max-width:767px").matches) {
    setTimeout(function () {
        $('.btn--burger-wrapper').removeClass('active');
        $('.widget-menu').removeClass('active');
    }, 1000);
}

var toTop = $('.to--top');

toTop.on('click', topFunction);

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        toTop.addClass('act');
    } else {
        toTop.removeClass('act');
    }
}

function topFunction() {
    $('body,html').animate({scrollTop: 0}, 100);
}

$('.btn--burger-wrapper').on('click', function() {
    $('.btn--burger-wrapper').toggleClass('active');
    $('.widget-menu').toggleClass('active');
});

$('.nav__mob').on('click', function () {
    $('.nav').toggleClass('active');
    $('.nav__mob').toggleClass('active');
    $('html').toggleClass('stop');
});
$('.nav__item a').on('click', function () {
    $('.nav').removeClass('active');
    $('html').removeClass('stop');
    $('.nav__mob').removeClass('active');
});
$('.nav__close').on('click', function () {
    $('.nav').removeClass('active');
    $('html').removeClass('stop');
    $('.nav__mob').removeClass('active');
});

/* FAQ */
$('.faq-btn').on('click', function () {
    $('.faq-btn').removeClass('is-active');
    $(this).addClass('is-active');
    $('.faq-item').hide();
    $('.faq-item').eq($(this).index()).fadeIn();
    animateTopFaq();
});

$('.market-item').on('click', function () {
    $(this).toggleClass('is-active');
});
$('.safe-mob__btn').on('click', function () {
    $('.safe-btn-wrapper').toggleClass('is-active');
});

/* Range */

$(".js-range-slider").ionRangeSlider();

var toTop = $('.to_top');

toTop.on('click', topFunction);

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        toTop.addClass('act');
    } else {
        toTop.removeClass('act');
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function topFunction() {
    $('body,html').animate({scrollTop: 0}, 100);
}

$('.widget-video__close').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.widget-video').fadeOut();
});

$('.cases-items').slick({
    slidesToShow: 1,
    infinite: true,
    arrows: true,
    dots: true,
    prevArrow: '<button class="slick-prev slick-arrow"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M0.0750003 10.425L10.35 7.21238e-08L11.925 1.575L3.15 10.5L12 19.425L10.425 21L-4.94705e-07 10.5L0.0750003 10.425Z" fill="#1C1C1C"/></svg></button>',
    nextArrow: '<button class="slick-next slick-arrow"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M11.925 10.425L1.65 7.21238e-08L0.0749999 1.575L8.85 10.5L-8.49094e-07 19.425L1.575 21L12 10.5L11.925 10.425Z" fill="#1C1C1C"/></svg></button>'
});

$('.team-slider').slick({
    slidesToShow: 1,
    infinite: true,
    arrows: true,
    dots: false,
    fade: true,
    prevArrow: '<button class="slick-prev slick-arrow"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.0749998 10.4252L10.35 0.000244213L11.925 1.57524L3.15 10.5002L12 19.4252L10.425 21.0002L-4.94705e-07 10.5002L0.0749998 10.4252Z" fill="white"/></svg></button>',
    nextArrow: '<button class="slick-next slick-arrow"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.925 10.4252L1.65 0.000244213L0.0749999 1.57524L8.85 10.5002L-8.49094e-07 19.4252L1.575 21.0002L12 10.5002L11.925 10.4252Z" fill="white"/></svg></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: true
            }
        }
    ]
});

$('.clients-slider').slick({
    slidesToShow: 1,
    infinite: true,
    arrows: true,
    dots: false,
    prevArrow: '<button class="slick-prev slick-arrow"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.0749998 10.4252L10.35 0.000244213L11.925 1.57524L3.15 10.5002L12 19.4252L10.425 21.0002L-4.94705e-07 10.5002L0.0749998 10.4252Z" fill="white"/></svg></button>',
    nextArrow: '<button class="slick-next slick-arrow"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.925 10.4252L1.65 0.000244213L0.0749999 1.57524L8.85 10.5002L-8.49094e-07 19.4252L1.575 21.0002L12 10.5002L11.925 10.4252Z" fill="white"/></svg></button>'
});

$('.citizen-slider').slick({
    slidesToShow: 4,
    infinite: true,
    arrows: true,
    dots: true,
    prevArrow: '<button class="slick-prev slick-arrow"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M0.0750003 10.425L10.35 7.21238e-08L11.925 1.575L3.15 10.5L12 19.425L10.425 21L-4.94705e-07 10.5L0.0750003 10.425Z" fill="#1C1C1C"/></svg></button>',
    nextArrow: '<button class="slick-next slick-arrow"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M11.925 10.425L1.65 7.21238e-08L0.0749999 1.575L8.85 10.5L-8.49094e-07 19.425L1.575 21L12 10.5L11.925 10.425Z" fill="#1C1C1C"/></svg></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                dots: true,
                prevArrow: '<button class="slick-prev slick-arrow"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M0.0750003 10.425L10.35 7.21238e-08L11.925 1.575L3.15 10.5L12 19.425L10.425 21L-4.94705e-07 10.5L0.0750003 10.425Z" fill="#1C1C1C"/></svg></button>',
                nextArrow: '<button class="slick-next slick-arrow"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M11.925 10.425L1.65 7.21238e-08L0.0749999 1.575L8.85 10.5L-8.49094e-07 19.425L1.575 21L12 10.5L11.925 10.425Z" fill="#1C1C1C"/></svg></button>'
            }
        }
    ]
});

$('.steps-items').slick({
    slidesToShow: 3,
    infinite: true,
    arrows: true,
    dots: true,
    prevArrow: '<button class="slick-prev slick-arrow"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M0.0750003 10.425L10.35 7.21238e-08L11.925 1.575L3.15 10.5L12 19.425L10.425 21L-4.94705e-07 10.5L0.0750003 10.425Z" fill="#1C1C1C"/></svg></button>',
    nextArrow: '<button class="slick-next slick-arrow"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M11.925 10.425L1.65 7.21238e-08L0.0749999 1.575L8.85 10.5L-8.49094e-07 19.425L1.575 21L12 10.5L11.925 10.425Z" fill="#1C1C1C"/></svg></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                dots: true,
                prevArrow: '<button class="slick-prev slick-arrow"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M0.0750003 10.425L10.35 7.21238e-08L11.925 1.575L3.15 10.5L12 19.425L10.425 21L-4.94705e-07 10.5L0.0750003 10.425Z" fill="#1C1C1C"/></svg></button>',
                nextArrow: '<button class="slick-next slick-arrow"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M11.925 10.425L1.65 7.21238e-08L0.0749999 1.575L8.85 10.5L-8.49094e-07 19.425L1.575 21L12 10.5L11.925 10.425Z" fill="#1C1C1C"/></svg></button>'
            }
        }
    ]
});

$('.work-items').slick({
    slidesToShow: 4,
    infinite: true,
    arrows: true,
    dots: true,
    prevArrow: '<button class="slick-prev slick-arrow"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M0.0750003 10.425L10.35 7.21238e-08L11.925 1.575L3.15 10.5L12 19.425L10.425 21L-4.94705e-07 10.5L0.0750003 10.425Z" fill="#1C1C1C"/></svg></button>',
    nextArrow: '<button class="slick-next slick-arrow"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M11.925 10.425L1.65 7.21238e-08L0.0749999 1.575L8.85 10.5L-8.49094e-07 19.425L1.575 21L12 10.5L11.925 10.425Z" fill="#1C1C1C"/></svg></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                dots: true,
                prevArrow: '<button class="slick-prev slick-arrow"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M0.0750003 10.425L10.35 7.21238e-08L11.925 1.575L3.15 10.5L12 19.425L10.425 21L-4.94705e-07 10.5L0.0750003 10.425Z" fill="#1C1C1C"/></svg></button>',
                nextArrow: '<button class="slick-next slick-arrow"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M11.925 10.425L1.65 7.21238e-08L0.0749999 1.575L8.85 10.5L-8.49094e-07 19.425L1.575 21L12 10.5L11.925 10.425Z" fill="#1C1C1C"/></svg></button>'
            }
        }
    ]
});

$('.contacts-slider').slick({
    slidesToShow: 1,
    infinite: true,
    arrows: true,
    dots: false,
    prevArrow: '<button class="slick-prev slick-arrow"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M0.0750003 10.425L10.35 7.21238e-08L11.925 1.575L3.15 10.5L12 19.425L10.425 21L-4.94705e-07 10.5L0.0750003 10.425Z" fill="#1C1C1C"/></svg></button>',
    nextArrow: '<button class="slick-next slick-arrow"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M11.925 10.425L1.65 7.21238e-08L0.0749999 1.575L8.85 10.5L-8.49094e-07 19.425L1.575 21L12 10.5L11.925 10.425Z" fill="#1C1C1C"/></svg></button>'
});

$('.team-mob-checks').slick({
    slidesToShow: 1,
    infinite: true,
    arrows: true,
    dots: true,
    prevArrow: '<button class="slick-prev slick-arrow"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M0.0750003 10.425L10.35 7.21238e-08L11.925 1.575L3.15 10.5L12 19.425L10.425 21L-4.94705e-07 10.5L0.0750003 10.425Z" fill="#1C1C1C"/></svg></button>',
    nextArrow: '<button class="slick-next slick-arrow"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M11.925 10.425L1.65 7.21238e-08L0.0749999 1.575L8.85 10.5L-8.49094e-07 19.425L1.575 21L12 10.5L11.925 10.425Z" fill="#1C1C1C"/></svg></button>'
});

/* Sliders */
$('.cases-item').each(function (index, el) {
    var top = $(this).find('.cases-slider');
    var bot = $(this).find('.cases-nav');

    top.slick({
        slidesToShow: 1,
        asNavFor: bot,
        arrows: false,
        noSwiping: true
    });

    bot.slick({
        slidesToShow: 4,
        arrows: false,
        asNavFor: top,
        focusOnSelect: true,
        vertical: true,
        verticalSwiping: true
    });
});

$('.safe-slider').each(function () {
    const slider = $(this);
    const slidesToShow = $(this).hasClass('safe-slider--big') ? 3 : 4;

    slider.slick({
        infinite: true,
        slidesToShow,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: '<button class="slick-prev slick-arrow"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.0749998 10.4252L10.35 0.000244213L11.925 1.57524L3.15 10.5002L12 19.4252L10.425 21.0002L-4.94705e-07 10.5002L0.0749998 10.4252Z" fill="white"/></svg></button>',
        nextArrow: '<button class="slick-next slick-arrow"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.925 10.4252L1.65 0.000244213L0.0749999 1.57524L8.85 10.5002L-8.49094e-07 19.4252L1.575 21.0002L12 10.5002L11.925 10.4252Z" fill="white"/></svg></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    prevArrow: '<button class="slick-prev slick-arrow"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M0.0750003 10.425L10.35 7.21238e-08L11.925 1.575L3.15 10.5L12 19.425L10.425 21L-4.94705e-07 10.5L0.0750003 10.425Z" fill="#1C1C1C"/></svg></button>',
                    nextArrow: '<button class="slick-next slick-arrow"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M11.925 10.425L1.65 7.21238e-08L0.0749999 1.575L8.85 10.5L-8.49094e-07 19.425L1.575 21L12 10.5L11.925 10.425Z" fill="#1C1C1C"/></svg></button>'
                }
            }
        ]
    });
});

$('.safe-btn').on('click', function () {
    $('.safe-btn').removeClass('is-active');
    $('.safe-btn-wrapper').removeClass('is-active');
    $('.safe-mob__btn span').text($(this).find('span').text());
    $(this).addClass('is-active');
    $(this).closest('.safe').find('.safe-slider').hide();
    $(this).closest('.safe').find('.safe-slider').eq($(this).index()).fadeIn();

    $(this).closest('.safe').find('.safe-slider').eq($(this).index()).each(function () {
        const slider = $(this);

        slider.slick('resize');
        slider.slick('setPosition');

        setTimeout(function () {
            slider.slick('resize');
            slider.slick('setPosition');
        }, 500);

    });
});

$('.faq__item').on('click', function () {
    $(this).toggleClass('active');
});

$('.team-btn').on('click', function () {
    $('.team-btn').removeClass('active');
    $(this).addClass('active');
    $('.team-tab').hide();
    $('.team-tab').eq($(this).index()).fadeIn();
    $('.team-tab').eq($(this).index()).find('.team-slider').slick('resize');
});

/* SEO */
$('.seo__btn').on('click', function () {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
        $(this).text('Скрыть');
    } else {
        $(this).text('Читать полностью');
    }
    $('.seo__text').toggleClass('active');
});

/* Modals */
$('.js-btn').on('click', function (e) {
    e.preventDefault();
    $('html').addClass('stop');

    var href = $(this).attr('href');

    $(href).fadeIn(500);
});

$('.modal__close').on('click', function (event) {
    event.preventDefault();
    $('html').removeClass('stop');
    $('.modal-overlay').fadeOut(500);
    $('.modal-cookies').fadeOut(500);
});

$('.cookie-close').on('click', function (event) {
    event.preventDefault();
    $('html').removeClass('stop');
    $('.modal-cookies').fadeOut(500);
});

$('.modal-overlay').mouseup(function (e) {
    var container = $('.modal');
    if (container.has(e.target).length === 0 && !container.is(e.target)) {
        $('html').removeClass('stop');
        $('.modal-overlay').fadeOut();
    }
});

/* Animation */
/* Titles anim */
$(".fz75, .fz48, .fz46, .fz40, .fz55, .fz60, .fz70").not('.no-anim').each(anime);
// $(".title-descr").not('.subtitle-first').each(anime);
function anime(anim){
    var thisTitle = $(this);
    var offsetTop = thisTitle.offset().top - $(window).height() - 10;
    if($(document).scrollTop() > offsetTop ){
        thisTitle.addClass('fade_in');
    }
    $(window).scroll(function(event) {
        offsetTop = thisTitle.offset().top - $(window).height() - 10;
        if($(document).scrollTop() > offsetTop ){
            thisTitle.addClass('fade_in');
        }
    });
}

/* Phone mask */
// $('input[name="phone"]').mask('+7(999)99-99-99');

/* Quiz */


var toTop = $('.to_top');

toTop.on('click', topFunction);

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        toTop.addClass('act');
    } else {
        toTop.removeClass('act');
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function topFunction() {
    $('body,html').animate({scrollTop: 0}, 100);
}

//AJAX

var nForm = false;
$(function () {
    'use strict';
    var action = $('.ajax-url').val();
    $('form').on('submit', function (e) {
        e.preventDefault();
        var formThis = $(this);
        var fd = new FormData(this);

        formThis.find('.btn').attr({
            'disabled': 'true'
        });


        if (formThis.find('input[name="formname"]').val() === "price") {
            var link = document.createElement('a');
            link.setAttribute('href', $('.price-pdf').val());
            link.setAttribute('target', "_blank");
            link.setAttribute('download', '');

            if (navigator.userAgent.indexOf('Mac') > 0) {
                window.open($('.price-pdf').val(), '_blank');
            } else {
                simulate(link, "click");
            }

            $(".modal-overlay").fadeOut();
            window.location.href = $('.thank-url').val();

        } else if (formThis.find('input[name="formname"]').val() === "useful-pdf") {
            var link = document.createElement('a');
            link.setAttribute('href', $('.useful-pdf').val());
            link.setAttribute('target', "_blank");
            link.setAttribute('download', '');

            if (navigator.userAgent.indexOf('Mac') > 0) {
                window.open($('.useful-pdf').val(), '_blank');
            } else {
                simulate(link, "click");
            }

            $(".modal-overlay").fadeOut();
            window.location.href = $('.thank-url').val();
        } else if (formThis.find('input[name="formname"]').val() === "pdf") {
            var link = document.createElement('a');
            link.setAttribute('href', $('.pdf-pdf').val());
            link.setAttribute('target', "_blank");
            link.setAttribute('download', '');

            if (navigator.userAgent.indexOf('Mac') > 0) {
                window.open($('.pdf-pdf').val(), '_blank');
            } else {
                simulate(link, "click");
            }

            $(".modal-overlay").fadeOut();
            window.location.href = $('.thank-url').val();

        } else if (formThis.find('input[name="formname"]').val() === "pdf1") {
            var link = document.createElement('a');
            link.setAttribute('href', $('.pdf1').val());
            link.setAttribute('target', "_blank");
            link.setAttribute('download', '');

            if (navigator.userAgent.indexOf('Mac') > 0) {
                window.open($('.pdf-pdf').val(), '_blank');
            } else {
                simulate(link, "click");
            }

            $(".modal-overlay").fadeOut();
            window.location.href = $('.thank-url').val();

        } else if (formThis.find('input[name="formname"]').val() === "pdf2") {
            var link = document.createElement('a');
            link.setAttribute('href', $('.pdf2').val());
            link.setAttribute('target', "_blank");
            link.setAttribute('download', '');

            if (navigator.userAgent.indexOf('Mac') > 0) {
                window.open($('.pdf-pdf').val(), '_blank');
            } else {
                simulate(link, "click");
            }

            $(".modal-overlay").fadeOut();
            window.location.href = $('.thank-url').val();

        } else if (formThis.find('input[name="formname"]').val() === "pdf3") {
            var link = document.createElement('a');
            link.setAttribute('href', $('.pdf3').val());
            link.setAttribute('target', "_blank");
            link.setAttribute('download', '');

            if (navigator.userAgent.indexOf('Mac') > 0) {
                window.open($('.pdf-pdf').val(), '_blank');
            } else {
                simulate(link, "click");
            }

            $(".modal-overlay").fadeOut();
            window.location.href = $('.thank-url').val();

        } else if (formThis.find('input[name="formname"]').val() === "pdf4") {
            var link = document.createElement('a');
            link.setAttribute('href', $('.pdf4').val());
            link.setAttribute('target', "_blank");
            link.setAttribute('download', '');

            if (navigator.userAgent.indexOf('Mac') > 0) {
                window.open($('.pdf-pdf').val(), '_blank');
            } else {
                simulate(link, "click");
            }

            $(".modal-overlay").fadeOut();
            window.location.href = $('.thank-url').val();

        } else if (formThis.find('input[name="formname"]').val() === "test") {


            formThis.find('input').attr({
                'disabled': 'true',
            });
            formThis.find('button').attr({
                'disabled': 'true',
            });

            $(".modal-overlay").fadeOut();
        } else {
            $(".modal-overlay").fadeOut();


        }

        formThis.find('.btn').removeAttr('disabled');
        $('form').trigger('reset');


        $.ajax({
            url: action,
            type: 'POST',
            contentType: false,
            processData: false,
            data: fd,
            success: function (msg) {
                window.location.href = $('.thank-url').val();
            },

        });
    });
});


// ---------------------

function simulate(element, eventName) {
    var options = extend(defaultOptions, arguments[2] || {});
    var oEvent, eventType = null;

    for (var name in eventMatchers) {
        if (eventMatchers[name].test(eventName)) { eventType = name; break; }
    }

    if (!eventType)
        throw new SyntaxError('Only HTMLEvents and MouseEvents interfaces are supported');

    if (document.createEvent) {
        oEvent = document.createEvent(eventType);
        if (eventType == 'HTMLEvents') {
            oEvent.initEvent(eventName, options.bubbles, options.cancelable);
        }
        else {
            oEvent.initMouseEvent(eventName, options.bubbles, options.cancelable, document.defaultView,
                options.button, options.pointerX, options.pointerY, options.pointerX, options.pointerY,
                options.ctrlKey, options.altKey, options.shiftKey, options.metaKey, options.button, element);
        }
        element.dispatchEvent(oEvent);
    }
    else {
        options.clientX = options.pointerX;
        options.clientY = options.pointerY;
        var evt = document.createEventObject();
        oEvent = extend(evt, options);
        element.fireEvent('on' + eventName, oEvent);
    }
    return element;
}

function extend(destination, source) {
    for (var property in source)
        destination[property] = source[property];
    return destination;
}

var eventMatchers = {
    'HTMLEvents': /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
    'MouseEvents': /^(?:click|dblclick|mouse(?:down|up|over|move|out))$/
}
var defaultOptions = {
    pointerX: 0,
    pointerY: 0,
    button: 0,
    ctrlKey: false,
    altKey: false,
    shiftKey: false,
    metaKey: false,
    bubbles: true,
    cancelable: true
}

$('input[name="quiz1"]').on('change', function () {
    setTimeout(function () {
        btnNext.click();
    }, 500);
});
$('input[name="quiz2"]').on('change', function () {
    setTimeout(function () {
        btnNext.click();
    }, 500);
});
$('input[name="quiz3"]').on('change', function () {
    setTimeout(function () {
        btnNext.click();
    }, 500);
});
$('input[name="quiz4"]').on('change', function () {
    setTimeout(function () {
        btnNext.click();
    }, 500);
});
$('input[name="quiz6"]').on('change', function () {
    setTimeout(function () {
        btnNext.click();
    }, 500);
});
$('input[name="quiz7"]').on('change', function () {
    setTimeout(function () {
        btnNext.click();
    }, 500);
});
$('.widget-video__close').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.widget-video').fadeOut();
});

/* Cookie */
var cookiesTest2 = get_cookie("test2");
if (cookiesTest2 !== '' && cookiesTest2 !== null) {
    // return false;
} else {
    $(document).mouseleave(function (event) {
        event = event || window.event;
        if (event.clientY < 0 || event.clientY < 3) {
            if (!closeMod3) {

                $('html').addClass('stop');
                $('#modal-wait').fadeIn();


                closeMod3 = true;


                var date2 = new Date();
                date2.setDate(date2.getDate() + 7);
                date2 = date2.toUTCString();
                document.cookie = "test2=1;expires=" + date2;
            }

        }
    });

}
var cookiesTest1 = get_cookie("test1");
if (cookiesTest1 !== '' && cookiesTest1 !== null) {
    // return false;
} else {
    var closeMod1 = false;
    var closeMod2 = false;
    var closeMod3 = false;

    if (!closeMod1) {

        $('#modal-cookies').fadeIn();


        closeMod1 = true;


        var date1 = new Date();
        date1.setDate(date1.getDate() + 7);
        date1 = date1.toUTCString();
        document.cookie = "test1=1;expires=" + date1;
    }
}

function get_cookie(cookie_name) {
    var results = document.cookie.match('(^|;) ?' + cookie_name + '=([^;]*)(;|$)');

    if (results)
        return (unescape(results[2]));
    else
        return null;
}

$('.case-close').on('click', function (e) {
    e.preventDefault();
    window.history.go(-1);
});

const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

function formatDate(date) {
    return [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
    ].join('.');
}

$('.catalog-badge').text(`Обновлен ${formatDate(yesterday)}`);

$(document).ready(function ($) {
    var offsetTop2 = $('.compare').offset().top - $(window).height() - 110;
    var lbl = false;
    $(window).scroll(function (event) {
        offsetTop2 = $('.compare').offset().top - $(window).height() - 110;
        if ($(document).scrollTop() > offsetTop2) {

            if (!lbl) {
                $(".twentytwenty-container").each(function (index, el) {
                    $(this).twentytwenty({
                        default_offset_pct: 0.25, // How much of the before image is visible when the page loads
                        no_overlay: true, //Do not show the overlay with before and after
                        move_slider_on_hover: true, // Move slider on mouse hover?
                        move_with_handle_only: true, // Allow a user to swipe anywhere on the image to control slider movement.
                        click_to_move: false
                    });
                });

                lbl = true;
            }
        }
    });
});

$(document).ready(function ($) {
    if($('body').find('.contacts').length > 0) {
        var offsetHeight = $(".contacts").offset().top - $(window).height() - 300;
        var mapFooter = false;
        var urlMap = "https://yandex.com/map-widget/v1/-/CCUNRPhroC";

        mapActivate();

        $(window).scroll(function (event) {
            offsetHeight = $(".contacts").offset().top - $(window).height() - 300;
            mapActivate();
        });

        function mapActivate() {
            if (!mapFooter) {
                if ($(document).scrollTop() > offsetHeight) {
                    $("#map").append('<iframe src="' + urlMap + '"style="width: 100%; height: 100%;" frameborder="0"></iframe>');
                    mapFooter = true;
                }
            }
        }
    }
});