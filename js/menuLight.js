'use strict';

$(document).ready(function () {
    $('.zajawa').click(function () {
        $('.zajawa.orange').removeClass('orange');
        $(this).addClass('orange');


    });


});


$(window).scroll(function () {
    var $menuItems = $('header a[href^="#"]');
    $menuItems.removeClass('orange');
    var viewportTop = $(this).scrollTop();
    var teamOffset = $('#team').offset();

    $menuItems.each(function (index, menuItem) {
        var elementsId = $(menuItem).attr('href');
        var element = $(elementsId);
        var elementsTop = Math.round(element.offset().top);
        var elementsBottom = Math.round(element.offset().top + element.height() + $('header').height());

        if (viewportTop >= elementsTop && viewportTop <= elementsBottom) {
            $(menuItem).addClass('orange');
        }
    });
});

