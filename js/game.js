'use strict';


$(document).ready(function () {
    if (window.location.hash === '#game') {
        startGame();
    }
});
var $box,
    $gameBoard,
    diamenty,
    $form = $("#email"),
    coords = [],
    availableXs = [],
    availableYs = [],
    bouldercoords = [],
    boulderavailableXs = [],

    bouldermoves = {
      down: function (node) {
          var newPosition = $(node).parent().next().find(':nth-child('+ ($(node).index() +1) +')');
          console.log(newPosition);
           return newPosition.hasClass('cell') ? node : newPosition;
      }
    },

    moves = {
    //move left
    left: function (node) {
        var newPosition = $(node).prev();
        return newPosition.hasClass('white') ? node : newPosition;
    },
    //move right
    right: function (node) {
        var newPosition = $(node).next();
        return newPosition.hasClass('white') ? node : newPosition;
    },
    //move down
    down: function (node) {
        var newPosition = $(node).parent().next().find(':nth-child('+ ($(node).index() +1) +')');
        console.log(newPosition);
        return newPosition.hasClass('white') ? node : newPosition;

    }
};

$('#sendForm').on('click', startGame);


function startGame () {

    var myMusic;
    myMusic = new Audio('music/Dig-It.mp3');
    //Thanks PuffballsUnited for track
    //author site: http://puffballsunited.newgrounds.com/
    // CC ( You may not use this work for commercial purposes without making specific arrangements with the artist UNLESS your work is a web-based game or animation, in which case you may use this freely. )
    //file: http://www.newgrounds.com/audio/listen/603041
    myMusic.play();
    myMusic.loop = true;

    $form.css({
        display: "none"
    });

    $box = $('#game');
    $gameBoard = createBoard(10, 10);
    $box.empty().append($gameBoard);
    coords = [];
    availableXs = [0,1, 2, 3, 4, 5, 6, 7, 8, 9];
    availableYs = [0,1, 2, 3, 4, 5, 6, 7, 8];

    //Create game view
    $('#gamefield').css({"height": "auto" });
    $('#score').css({"padding-top": "10vh"}, {"padding-bottom": "10vh"});
    $('#score').css( {"padding-bottom": "10vh"});
    $('.gamefooter').css({"padding-bottom": "10vh" });
    $('.leftpadding').css({"width": "20vw" });
    $('.rightpadding').css({"width": "20vw" });
    $('#score').html('<p>Zbierz wszystkie diamenty</p>');
    $('.leftpadding').html('<p>Dziękujemy za adres email, masz teraz szansę sprawdzić się w grze. Zbierz wszystkie diamenty.</p>' +
        '<p> Aby utrudnić możesz ruszać się tylko w dół i na boki przy użyciu strzałek.</p> ' +
        '<p>Uważaj także na głazy mogą ciebie przygnieść w ich okolicy poruszaj się powoli, a pod nimi przeskakuj szybko.</p> ');
    $('.rightpadding').html('<p>Jeżeli cokolwiek ci nie wyjdzie to pamiętaj, że możesz zawsze odświeżyć plansze przyciskając spacje. </p>');
//
// var x = Math.round(Math.random()*10);
//     var y = Math.round(Math.random()*10);

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
        $('td[x=' + item.x + '][y=' + item.y + ']').addClass('diament')});

    bouldercoords = [];
    boulderavailableXs = [0,1, 2, 3, 4, 5, 6, 7, 8, 9];

    //boulder code
    for (var i = 0; i < 3; i++) {
        var indexX = Math.round(Math.random() * (availableXs.length - 1));
        console.log(indexX);
        var x = boulderavailableXs.splice(indexX, 1)[0];

        var indexY = Math.round(Math.random() * (availableYs.length - 1));
        console.log(indexY);
        var y = availableYs.splice(indexY, 1)[0];
        if(x==4 && y ==0){
            i--;
            continue;
        }
        bouldercoords.push({x: x, y: y});
    }

    console.log(bouldercoords);
    bouldercoords.forEach(function (item) {
        $('td[x=' + item.x + '][y=' + item.y + ']').addClass('white').removeClass('cell')});


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
        else if (event.which === 32) {
            return false;
        }
    });

    var player = $gameBoard.find('.player');

    var playerout = function (){player.removeClass('player cell').addClass('black');};
    var playerin = function (){player.removeClass('diament cell').addClass('player');};

    function goBoulders() {
        window.setTimeout(function(){
            $gameBoard.find('.white').each(function () {
                $(this).removeClass('white').addClass('black');
                bouldermoves.down($(this)).removeClass('black').addClass('white');
                if ($('.player.white').length == 1)
                {
                    $('#score').html('Zabił ciebie głaz');
                    $(document).off('keyup');
                    myMusic.pause();
                    window.alert('Zabił ciebie głaz! Spróbuj jeszcze raz.');
                    startGame().reload();
                }
            });
        }, 200);
    }

    // move player - key binding
    $(document).on('keyup', function (event) {
        var keyCode = event.which;
        console.log(keyCode, event);

        if (keyCode === 37) {
            if (player.attr('x') > 0){
                playerout();
                player = moves.left(player);

                goBoulders();

                playerin();

            }
        }
        if (keyCode === 39) {
            if (player.attr('x') < 9){
                playerout();
                player = moves.right(player);

                goBoulders();

                playerin();

            }
        }
        else if (keyCode === 40) {
            if (player.attr('y') < 9){
                playerout();
                player = moves.down(player);

                goBoulders();

                playerin();

            }
        }
        else if (keyCode === 32) {
            startGame().reload();
        }

    checkDiamonds(player);

    });

    return console.log(player.attr('y'), $('.white').attr('y'), player.attr('x'),  $('.white').attr('x'))

    function checkDiamonds(player) {

        diamenty = $('.diament').length;

        if (diamenty) {

            if (player.attr('y') == 9) {
                $('#score').html('PRZEGRALES !');
                $(document).off('keyup');
                myMusic.pause();
                window.alert('Przegrałeś Spróbuj jeszcze raz');
                startGame().reload();
            }


            else {
                $('#score').html('Pozostało ' + diamenty + ' diamentów');
            }

        }


        else if ($('.diamenty').length === 0) {
            $('#score').html('Wygraleś gratulacje');
            $(document).off('keyup');
            myMusic.pause();
            window.alert('Wygrałeś :) Spróbuj jeszcze raz.');
            startGame().reload();
        }


    }

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

