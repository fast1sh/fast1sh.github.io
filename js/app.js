/* Sliders */
$('.catalog-item-slider').slick({
    slidesToShow: 1,
    infinite: false,
    arrows: true,
    dots: false,
    draggable: false,
    prevArrow: '<button class="slick-prev slick-arrow catalog-arrow"><svg width="44" height="14" viewBox="0 0 44 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.85981 14L0 7.00275L6.85981 0L7.81586 0.975207L2.58188 6.31405H44V7.69146H2.58188L7.81586 13.0303L6.85981 14Z" fill="white"/></svg></button>',
    nextArrow: '<button class="slick-next slick-arrow catalog-arrow"><svg width="44" height="14" viewBox="0 0 44 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.85981 14L0 7.00275L6.85981 0L7.81586 0.975207L2.58188 6.31405H44V7.69146H2.58188L7.81586 13.0303L6.85981 14Z" fill="white"/></svg></button>'
});

$('.catalog-tab').slick({
    slidesToShow: 3,
    infinite: false,
    arrows: false,
    dots: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

$('.design-tab').slick({
    slidesToShow: 3,
    infinite: false,
    arrows: false,
    dots: true,
    prevArrow: '<button class="slick-prev slick-arrow colored-arrow design-arrow"><svg width="44" height="14" viewBox="0 0 44 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.85981 14L0 7.00275L6.85981 0L7.81586 0.975207L2.58188 6.31405H44V7.69146H2.58188L7.81586 13.0303L6.85981 14Z" fill="white"/></svg></button>',
    nextArrow: '<button class="slick-next slick-arrow colored-arrow design-arrow"><svg width="44" height="14" viewBox="0 0 44 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.85981 14L0 7.00275L6.85981 0L7.81586 0.975207L2.58188 6.31405H44V7.69146H2.58188L7.81586 13.0303L6.85981 14Z" fill="white"/></svg></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

$('.install-gal').slick({
    slidesToShow: 1,
    infinite: false,
    arrows: true,
    dots: true,
    prevArrow: '<button class="slick-prev slick-arrow colored-arrow install-arrow"><svg width="44" height="14" viewBox="0 0 44 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.85981 14L0 7.00275L6.85981 0L7.81586 0.975207L2.58188 6.31405H44V7.69146H2.58188L7.81586 13.0303L6.85981 14Z" fill="white"/></svg></button>',
    nextArrow: '<button class="slick-next slick-arrow colored-arrow install-arrow"><svg width="44" height="14" viewBox="0 0 44 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.85981 14L0 7.00275L6.85981 0L7.81586 0.975207L2.58188 6.31405H44V7.69146H2.58188L7.81586 13.0303L6.85981 14Z" fill="white"/></svg></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false
            }
        }
    ]
});

$('.install-awards').slick({
    slidesToShow: 2,
    infinite: false,
    arrows: true,
    dots: true,
    prevArrow: '<button class="slick-prev slick-arrow colored-arrow install-arrow"><svg width="44" height="14" viewBox="0 0 44 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.85981 14L0 7.00275L6.85981 0L7.81586 0.975207L2.58188 6.31405H44V7.69146H2.58188L7.81586 13.0303L6.85981 14Z" fill="white"/></svg></button>',
    nextArrow: '<button class="slick-next slick-arrow colored-arrow install-arrow"><svg width="44" height="14" viewBox="0 0 44 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.85981 14L0 7.00275L6.85981 0L7.81586 0.975207L2.58188 6.31405H44V7.69146H2.58188L7.81586 13.0303L6.85981 14Z" fill="white"/></svg></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        }
    ]
});

$('.contacts-slider').slick({
    slidesToShow: 1,
    infinite: false,
    arrows: true,
    dots: true,
    prevArrow: '<button class="slick-prev slick-arrow colored-arrow contacts-arrow"><svg width="44" height="14" viewBox="0 0 44 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.85981 14L0 7.00275L6.85981 0L7.81586 0.975207L2.58188 6.31405H44V7.69146H2.58188L7.81586 13.0303L6.85981 14Z" fill="white"/></svg></button>',
    nextArrow: '<button class="slick-next slick-arrow colored-arrow contacts-arrow"><svg width="44" height="14" viewBox="0 0 44 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.85981 14L0 7.00275L6.85981 0L7.81586 0.975207L2.58188 6.31405H44V7.69146H2.58188L7.81586 13.0303L6.85981 14Z" fill="white"/></svg></button>'
});

/* Select */
$('select[name="social"]').on('input change', function () {
    $('.select-images img').hide();
    if ($(this).val() === 'What`s app') {
        $('.select-images .whatsapp').show();
    }

    if ($(this).val() === 'Telegram') {
        $('.select-images .telegram').show();
    }
});

/* Quiz */
var number = 0;
var maxNumber = $(".quiz-item").length;
var $element = $(".quiz-item").find("input, select, textarea");
var btnPrev = $(".quiz-btn--prev");
var btnNext = $('.quiz-btn--next');
var isValid;
var dataBlock;
var activeSlide = [];
var qw3widthNum = $('#qw3-num');
var qw3widthSlider = $('#qw3-slider');
var qw4widthNum = $('#qw4-num');
var qw4widthSlider = $('#qw4-slider');

$('.quiz-option-number__btn--minus').on('click', function () {
    const newValue = parseInt($('.quiz-option-number__input').val()) === 0 ? 0 : parseInt($('.quiz-option-number__input').val()) - 1;
    $('.quiz-option-number__input').val(newValue);
    $('.quiz-option-number__input').trigger( "change" );
});

$('.quiz-option-number__btn--plus').on('click', function () {
    const newValue = parseInt($('.quiz-option-number__input').val()) + 1;
    $('.quiz-option-number__input').val(newValue);
    $('.quiz-option-number__input').trigger( "change" );
});

$element.on('change input', function (e) {
    var value = $(this).val().trim();
    isValid = value !== "";
    btnActive(!isValid);
});

function btnActive(isValid) {

    if (number === 0) {
        btnPrev.prop('disabled', 'false');
        btnNext.prop('disabled', isValid);
    } else {
        btnPrev.prop('disabled', false);
        if (activeSlide[number] === true || isValid === false) {
            btnNext.prop('disabled', false);
        } else {
            btnNext.prop('disabled', true);
        }
    }

    //   if ($('#qw-s').hasClass('acts')) {

    //     if ($("input[name='semifinal-phone").val()) {
    //       btnSemifinal.prop('disabled', false);
    //       console.log('VAL TRUE');
    //     } else {
    //       btnSemifinal.prop('disabled', true);
    //       console.log('VAL FALSE');
    //     }
    //   }
}

// sidebar

function progress(num) {
    const percent = parseInt((100 / maxNumber) * (num + 1));
    $('.js-quiz').text(percent);
    $('.quiz-progress__inner').css('width', (percent === 100 ? 98.9 : percent) + '%');
}
progress(0);

// btn
function btnClick() {
    btnPrev.on('click', function (event) {
        event.preventDefault();
        --number;
        $(".quiz-item").hide();
        $(".quiz-item").eq(number).fadeIn();
        btnActive(!isValid);
        if (number === 0) {
            btnPrev.hide();
        }
        progress(number);

        animateTop();

        btnNext.blur();
    });


    btnNext.on('click', function (event) {
        event.preventDefault();

        activeSlide[number] = true;
        ++number;
        $(".quiz-item").hide();
        $(".quiz-item").eq(number).fadeIn(1000);
        btnActive(!isValid);

        if (activeSlide[number] === true) {
            btnNext.prop('disabled', false);
        } else {
            btnNext.prop('disabled', true);
        }

        if (number > 0) {
            btnPrev.show();
        }

        if (number === 7) {
            $(".quiz-bottom").hide();
            $(".quiz-right").hide();
            $(".quiz-inner").addClass('is-semifinal');
            $(".quiz-semifinal-img").fadeIn();
        }

        progress(number);

        animateTop();

        setTimeout(function () {
            btnNext.trigger("blur");
        }, 500);
    });

    //   btnSemifinal.on('click', function (event) {
    //     activeSlide[number] = true;
    //     ++number;
    //     btnActive();
    //      $(".quiz__item").hide().removeClass('acts');
    //      $("#qw-f").fadeIn(1000).addClass('acts');
    //   })
}
btnClick();

function animateTop(eq) {
    var elem = $('.quiz-inner');
    var top = elem.offset().top - 70;
    $('body,html').animate({ scrollTop: top }, 400);
}

/* Download Section */
$('.download-tab').on('click', function () {
   $('.download-tab').removeClass('is-active');
   $(this).addClass('is-active');

   $('.download-imgs img').hide();
   $('.download-imgs img').eq($(this).index()).fadeIn();

   $('.download-item').hide();
   $('.download-item').eq($(this).index()).fadeIn();
});

/* Catalog Section */
$('.catalog-mob__btn').on('click', function () {
    $('.catalog-btn-wrapper').toggleClass('is-active');
});

$('.catalog-btn').on('click', function () {
    $('.catalog-btn').removeClass('is-active');
    $(this).addClass('is-active');
    $('.catalog-btn-wrapper').removeClass('is-active');
    $('.catalog-mob__btn span').text($(this).find('span').text());

    $('.catalog-tab').hide();
    $('.catalog-tab').eq($(this).data('index')).fadeIn();

    $('.catalog-tab').eq($(this).data('index')).slick('resize');
    $('.catalog-tab').eq($(this).data('index')).slick('setPosition');

    const slider = $('.catalog-tab').eq($(this).data('index')).find('.catalog-item-slider');
    slider.slick('resize');
    slider.slick('setPosition');

    setTimeout(function () {
        slider.slick('resize');
        slider.slick('setPosition');
        $('.catalog-tab').eq($(this).data('index')).slick('resize');
        $('.catalog-tab').eq($(this).data('index')).slick('setPosition');
    }, 500);
});

/* Design Section */
$('.design-mob__btn').on('click', function () {
    $('.design-btn-wrapper').toggleClass('is-active');
});

$('.design-btn').on('click', function () {
    $('.design-btn').removeClass('is-active');
    $(this).addClass('is-active');
    $('.design-btn-wrapper').removeClass('is-active');
    $('.design-mob__btn span').text($(this).find('span').text());

    $('.design-tab').hide();
    $('.design-tab').eq($(this).data('index')).fadeIn();

    $('.design-tab').eq($(this).data('index')).slick('resize');
    $('.design-tab').eq($(this).data('index')).slick('setPosition');

    setTimeout(function () {
        $('.design-tab').eq($(this).data('index')).slick('resize');
        $('.design-tab').eq($(this).data('index')).slick('setPosition');
    }, 500);
});

/* Map */
$(document).ready(function ($) {
    if($('body').find('.contacts').length > 0) {
        var offsetHeight = $(".contacts").offset().top - $(window).height() - 300;
        var mapFooter = false;
        var urlMap = "https://yandex.ru/map-widget/v1/-/CCUN7SsjWA";

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

/* To Top Button */
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
    $('body,html').animate({scrollTop: 0}, 100);
}

/* Widget */
if (window.matchMedia("(max-width:767px").matches) {
    setTimeout(function () {
        $('.btn--burger-wrapper').removeClass('active');
        $('.widget-menu').removeClass('active');
    }, 1000);
}

$('.btn--burger-wrapper').on('click', function () {
    $('.btn--burger-wrapper').toggleClass('active');
    $('.widget-menu').toggleClass('active');
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
});

$('.modal-overlay').mouseup(function (e) {
    var container = $('.modal');
    if (container.has(e.target).length === 0 && !container.is(e.target)) {
        $('html').removeClass('stop');
        $('.modal-overlay').fadeOut();
    }
});

/* Nav */
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

/* Mobile more */
$('.link-more').on('click', function () {
   $(this).closest('.section').find('.js-mobile-more').removeClass('js-mobile-more');
   $(this).remove();
});

/* Animation */
$(".fz75, .fz48, .fz46, .fz40, .fz55, .fz60, .fz70, .fz96, .section-title").not('.no-anim').each(anime);
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
$('input[name="phone"]').mask('+7(999)99-99-99');

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


        if (formThis.find('input[name="formfile"]')) {
            var link = document.createElement('a');
            link.setAttribute('href', formThis.find('input[name="formfile"]').val());
            link.setAttribute('target', "_blank");
            link.setAttribute('download', '');

            if (navigator.userAgent.indexOf('Mac') > 0) {
                window.open($('.price-pdf').val(), '_blank');
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

/* Cookie */
var cookiesTest1 = get_cookie("test1");
if (cookiesTest1 !== '' && cookiesTest1 !== null) {
    // return false;
} else {
    var closeMod1 = false;
    var closeMod2 = false;
    var closeMod3 = false;

    if (!closeMod1) {

        $('#modal-wait').fadeIn();


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