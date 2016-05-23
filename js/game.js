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