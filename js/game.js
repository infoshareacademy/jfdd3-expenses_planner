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
$('#game').append(createBoard(10,10));

$('#game').keydown(function(e) {
    switch (e.which){
        case 37: //lewo
            console.log(left);

        case 38:
            console.log(up);
        case 39:
            console.log(right);
        case 40:
            console.log(down);
        default: return; // no control on rest keys
    }
    e.preventDefault(); //blocking keys
});