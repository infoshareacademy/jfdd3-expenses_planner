'use strict';

$(document).ready(function () {
    $('.zajawa').click(function () {
        $('.zajawa.orange').removeClass('orange');
        $(this).addClass('orange');
    });


});


$(window).scroll(function () {
        $('header a[href^="#"]').removeClass('orange')
    var top = $(this).scrollTop();
    if (top > 1 && top <= 1000) $('a[href="#callToactionZajawka"]').addClass('orange')
        if (top > 1000  && top <= 2100) $('a[href="#description"]').addClass('orange')
        if (top > 2100  && top <= 3200) $('a[href="#team"]').addClass('orange')
        if (top > 3200) $('a[href="#email"]').addClass('orange')
    }
);

