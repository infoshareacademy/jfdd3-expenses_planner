'use strict';

$(document).ready(function () {
    if (window.location.hash === '#game') {
        startGame();
    }
});

$('#sendForm').on('click', startGame);

function startGame () {
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


//
// var x = Math.round(Math.random()*10);
//     var y = Math.round(Math.random()*10);


    var coords = [];
    var availableXs = [0,1, 2, 3, 4, 5, 6, 7, 8, 9];
    var availableYs = [0,1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (var i = 0; i < 6; i++) {
        var indexX = Math.round(Math.random() * (availableXs.length - 1));
        console.log(indexX);
        var x = availableXs.splice(indexX, 1)[0];

        var indexY = Math.round(Math.random() * (availableYs.length - 1));
        console.log(indexY);
        var y = availableYs.splice(indexY, 1) [0];
        coords.push({x: x, y: y});
    }



    console.log(coords);
    coords.forEach(function (item) {
        // $('td[x=' + x +'][y=' + y + ']').css ({ "background-color": "red"});
        $('td[x=' + item.x + '][y=' + item.y + ']').css({
            backgroundImage: 'url(images/icons/diament.jpg)',
            backgroundSize: '100%'

    });


    $('#game').css({
    $gameBoard.find('td').eq(4).addClass('player');

    // prevent arrow down to scroll page
    $(document).on('keydown', function (event) {
        if (event.which === 40) {
            return false;
        }
    });

    var moves = {
        left: function (node) {
            //console.log('posX', $(node).attr('x'));

            return $(node).prev();
        },
        right: function (node) {
            return $(node).next();
        },
        down: function (node) {
            return $(node).parent().next().find(':nth-child('+ ($(node).index() +1) +')');
        }
    };

    var $player = $gameBoard.find('.player');

    // move player
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
}})


/*
 $('#game').append(createBoard(10, 10));
 $('#game').keydown(function (e) {
 switch (e.which) {
 case 37: //lewo
 console.log(left);
 case 38:
 console.log(up);
 case 39:
 console.log(right);
 case 40:
 console.log(down);
 default:
 return; // no control on rest keys
 }
 e.preventDefault(); //blocking keys
 });*/
