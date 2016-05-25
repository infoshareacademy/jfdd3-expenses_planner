'use strict';

$('#sendForm').on('click', function () {
    var $box,
        $gameBoard,
        $form = $("#email");

    $form.css({
        display: "none"
    });

    $box = $('#game');

    $gameBoard = createBoard(10, 10);
    $box.append($gameBoard);

    $('#game').css({

        height: "100vh"
    });

});


function createBoard(height, width) {
    var $board = $('<table>');
    var $row, $data;

    for (var y = 0; y < height; y += 1) {
        $row = $("<tr>");
        for (var x = 0; x < width; x += 1) {
            $data = $('<td>')
                .addClass('cell').attr('x', x).attr('y', y);
            $row.append($data);
        }
        $board.append($row);
    }
    return $board;
}

