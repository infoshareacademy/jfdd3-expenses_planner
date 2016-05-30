'use strict';

$(document).ready(function () {
    if (window.location.hash === '#game') {
        startGame();
    }
});

$('#sendForm').on('click', startGame);

function startGame () {
    var $box,
        $gameBoard,
        $form = $("#email");

    $form.css({
        display: "none"
    });

    $box = $('#game');

    $gameBoard = createBoard(10, 10);
    $box.append($gameBoard);

    $gameBoard.find('td').eq(4).addClass('player');

    // prevent arrow down to scroll page
    $(document).on('keydown', function (event) {
        //prevent going up
        if (event.which === 38) {
            return false;
        }
        //prevent going down
        else if (event.which === 40) {
            return false;
        }
    });

    var moves = {
        //move left
        left: function (node) {
            //console.log('posX', $(node).attr('x')); if buged check
            return $(node).prev();
        },
        //move right
        right: function (node) {
            return $(node).next();
        },
        //move down
        down: function (node) {
            return $(node).parent().next().find(':nth-child('+ ($(node).index() +1) +')');
        }
    };

    var $player = $gameBoard.find('.player');

    // move player - key binding
    $(document).on('keyup', function (event) {
        var keyCode = event.which;
        console.log(keyCode, event);

        if (keyCode === 37) {
            if ($player.attr('x') > 0){
            $player.removeClass('player').addClass('black');
            $player = moves.left($player);
            $player.addClass('player');
            }
        }
        else if (keyCode === 39) {
            if ($player.attr('x') < 9){
            $player.removeClass('player').addClass('black');
            $player = moves.right($player);
            $player.addClass('player');
            }
        }
        else if (keyCode === 40) {
            if ($player.attr('y') < 9){
            $player.removeClass('player').addClass('black');
            $player = moves.down($player);
            $player.addClass('player');
                }
        }
    });

    $box.css({
        height: "100vh"
    });

}

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

