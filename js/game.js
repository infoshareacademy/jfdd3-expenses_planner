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
    boulderavailableYs = [],

    moves = {
    //move left
    left: function (node) {
        var newPosition = $(node).prev();
        console.log(newPosition);

        return newPosition.hasClass('white') ? node : newPosition;

        //return $(node).prev();
    },
    //move right
    right: function (node) {

        var newPosition = $(node).next();
        console.log(newPosition);

        return newPosition.hasClass('white') ? node : newPosition;

        //return $(node).next();
    },
    //move down
    down: function (node) {
        //if ($(node).parent().next().find(':nth-child('+ ($(node).index() +1) +')').hasClass('white'); break );

        var newPosition = $(node).parent().next().find(':nth-child('+ ($(node).index() +1) +')');
        console.log(newPosition);

        return newPosition.hasClass('white') ? node : newPosition;

        //return $(node).parent().next().find(':nth-child('+ ($(node).index() +1) +')');
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
    $('.gamefooter').css({"padding-bottom": "10vh" });
    $('.leftpadding').css({"width": "20vw" });
    $('.rightpadding').css({"width": "20vw" });
    $('#score').html('<p>Zbierz wszystkie diamenty</p>');
    $('.leftpadding').html('<p>Dziękujemy za adres email, masz teraz szansę sprawdzić się w grze. Zbierz wszystkie diamenty. Aby utrudnić możesz ruszać się tylko w dół i na boki przy użyciu strzałek.</p>');

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
        $('td[x=' + item.x + '][y=' + item.y + ']').addClass('white')});

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

    var player = $gameBoard.find('.player');

    // move player - key binding
    $(document).on('keyup', function (event) {
        var keyCode = event.which;
        console.log(keyCode, event);

        if (keyCode === 37) {
            if (player.attr('x') > 0){
                player.removeClass('player cell').addClass('black');
                player = moves.left(player);
                player.removeClass('diament').addClass('player');
            }
        }
        else if (keyCode === 39) {
            if (player.attr('x') < 9){
                player.removeClass('player cell').addClass('black');
                player = moves.right(player);
                player.removeClass('diament').addClass('player');
            }
        }
        else if (keyCode === 40) {
            if (player.attr('y') < 9){
                player.removeClass('player cell').addClass('black');
                player = moves.down(player);
                player.removeClass('diament').addClass('player');
            }
        }

    checkDiamonds(player);

    });

    function checkDiamonds(player){

        diamenty = $('.diament').length;

        if(diamenty){

            if (player.attr('y') == 9){
                $('#score').html('PRZEGRALES !');
                $(document).off('keyup');
                myMusic.pause();
                window.alert('Przegrałeś');
                startGame().reload();
            }
            else{
                $('#score').html('Pozostało '+diamenty+' diamentów');
            return}
        }
        else if ($('.diamenty').length === 0){
            $('#score').html('Wygraleś gratulacje');
        $(document).off('keyup');
        myMusic.pause();
        window.alert('Wygrałeś :)');
        startGame().reload();}
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

