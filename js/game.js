'use strict';

var diamenty;

$(document).ready(function () {
    if (window.location.hash === '#game') {
        startGame();
    }
});

$('#sendForm').on('click', startGame);

var myMusic;

function startGame () {
    var $box,
        $gameBoard,
        $form = $("#email");

    myMusic = new Audio('Dig-It.mp3'); //Thanks PuffballsUnited for track
    myMusic.play();

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
    var availableYs = [0,1, 2, 3, 4, 5, 6, 7, 8];
    for (var i = 0; i < 6; i++) {
        var indexX = Math.round(Math.random() * (availableXs.length - 1));
        console.log(indexX);
        var x = availableXs.splice(indexX, 1)[0];

        var indexY = Math.round(Math.random() * (availableYs.length - 1));
        console.log(indexY);
        var y = availableYs.splice(indexY, 1) [0];
        if(x==4 && y ==0){
            i--;
            continue;
        }

        coords.push({x: x, y: y});
    }



    console.log(coords);
    coords.forEach(function (item) {
        // $('td[x=' + x +'][y=' + y + ']').css ({ "background-color": "red"});
        $('td[x=' + item.x + '][y=' + item.y + ']').addClass('diament')});


    //$('#game').css({
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
            $player.removeClass('diament').addClass('player');
            }
        }
        else if (keyCode === 39) {
            if ($player.attr('x') < 9){
            $player.removeClass('player').addClass('black');
            $player = moves.right($player);
            $player.removeClass('diament').addClass('player');
            }
        }
        else if (keyCode === 40) {
            if ($player.attr('y') < 9){
            $player.removeClass('player').addClass('black');
            $player = moves.down($player);
            $player.removeClass('diament').addClass('player');
                }
        }

    checkDiamonds($player);


    });

    function checkDiamonds(player){

        diamenty = $('.diament').length;
        if(diamenty){

        if (player.attr('y')==9){
            $('#score').html('PRZEGRALES !');
            $(document).off('keyup');
            myMusic.pause();
        }
           else
            $('#score').html('Pozostało '+diamenty+' diamentów');
            }
            else
            $('#score').html('Wygraleś gratulacje');
    }


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

