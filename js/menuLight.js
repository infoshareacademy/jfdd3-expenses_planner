'use strict';

// $(document).ready(function () {
//     $('.zajawa').click(function () {
//         if ($(this).addClass('orange')) {
//             $('.zajawa.orange').removeClass('orange')
//         }
//     })});
// });
$(document).ready(function () {
    $('.zajawa').click(function () {
        $('.zajawa.orange').removeClass('orange');
        $(this).addClass('orange');
    });


});
// dobry
// if (keyCode === 37) {
//     if ($player.attr('x') > 0){
//         $player.removeClass('player').addClass('black');
//         $player = moves.left($player);
//         $player.removeClass('diament').addClass('player');
//     }
// }