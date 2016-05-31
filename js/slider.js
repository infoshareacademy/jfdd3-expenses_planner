'use strict';

$('#left_scroll').click(function (){
    $slides.filter('.visible').removeClass('visible').prev().addClass('visible');
    //order -= 1;
    if ($slides.filter('.visible').length === 0) {
        $slides.last().addClass('visible');
    }
});

$('#right_scroll').click(function (){
    $slides.filter('.visible').removeClass('visible').next().addClass('visible');
    //order += 1;
    if ($slides.filter('.visible').length === 0) {
        $slides.first().addClass('visible');
    }
});

var $slides = $('.member');
//var order = 1;

setInterval(function(){
    //if (order === 0){
    //    $slides.eq(3).removeClass('visible');
    //}
    //else {
    //    $slides.eq(order-1).removeClass('visible');
    //}
    //
    //$slides.eq(order).addClass('visible');
    //
    //if(order === 3) {
    //    order = 0;
    //}else {
    //    order++;
    //}
    $('#right_scroll').click();
}, 3000);



