'use strict';

function createBoard(height, width) {
    var $board = $('<table>');
    var $row, $data;

    for (var y = 0; y < height; y += 1) {
        $row = $("<tr>");
        for (var x = 0; x < width; x += 1) {
            $data = $('<td>')
                .addClass('game_block');
            $row.append($data);
        }
        $board.append($row);
    }
    return $board;
}
$('#game').append(createBoard(10, 10));

$(document).keydown(function (e) {
   var keyCode = e.keyCode || e.which;
   var arrow = {left: 37, up: 38, right: 39, down:40 };
   switch (keyCode) {
       case arrow.left:
           console.log('left');
           break;
       case arrow.up:
           console.log('up');
           break;
       case arrow.right:
           console.log('right');
           break;
       case arrow.down:
           console.log('down');
           break;
   }
});

