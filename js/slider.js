'use strict';

var $slides = $('.member');

$('#left_scroll').click(function (){
    $slides.filter('.visible').removeClass('visible').prev().addClass('visible');
    if ($slides.filter('.visible').length === 0) {
        $slides.last().addClass('visible');
    }
});

$('#right_scroll').click(function (){
    $slides.filter('.visible').removeClass('visible').next().addClass('visible');
    if ($slides.filter('.visible').length === 0) {
        $slides.first().addClass('visible');
    }
});

setInterval(function(){
    $('#right_scroll').click();
}, 5000);

