/**
 * Created by gsparzak on 30.05.16.
 */

$('#right_scroll').click(function (){
    var a = $x.indexOf(function(item) {
        return item.hasClass('visible')
    });
        $x[a].removeClass('visible');
            // .next()
        if (a<3) {
            $x[a + 1].addClass('visible');
        } else {
            $x[0].addClass('visible')
        }
});

$('#left_scroll').click(function (){
    $x.find(function(item) {
        return item.hasClass('visible')
    }).removeClass('visible').prev().addClass('visible');
});

    /*$x[y+1].addClass('visible');
    Sx[y].removeClass('visible');*/


var $carousel = $('#carousel');
// var $slides = $('.member'); jQuery nie chce wykonać funkcji $slides[order].addClass...
var order = 1;
var $x = [$('.Natalia'), $('.Grzegorz'), $('.Krystian'), $('.Dawid')];

setInterval(function(){
    if (order === 0){
        $x[3].removeClass('visible');
    }
    else {
        $x[order-1].removeClass('visible');
    }

    $x[order].addClass('visible');

    if(order === 3) {
        order = 0;
    }else {
        order++;
    }
}, 5000);



