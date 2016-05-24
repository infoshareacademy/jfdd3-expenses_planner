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
           if () {
           }
           break;
       case arrow.up:
           console.log('up');
           if () {
           }
           break;
       case arrow.right:
           console.log('right');
           if () {
           }
           break;
       case arrow.down:
           console.log('down');
           if () {
           }
           break;
   }
});

// Game constant options - movement

// Movement
// 7  0  1
// 6     2
// 5  4  3

var DIR = {UP: 0, UPRIGHT: 1, RIGHT: 2, DOWNRIGHT: 3, DOWN: 4, DOWNLEFT: 5, LEFT: 6, UPLEFT: 7};
var DIRX = [   0,          1,        1,            1,       0,          -1,      -1,        -1];
var DIRY = [  -1,         -1,        0,            1,       1,           1,       0,        -1];

//Player Script


//Player Movement

Player.go = function () {

    var oldPLpos = Player.PLpos,
        myDirection = currentDirection,
        grid = createBoard.grid;

    Player.PLpos = NewPLpos;

    if (grid[NewPLpos.row] && grid[NewPLpos.row][NewPLpos.col]) {
        grid[NewPLpos.row][NewPLpos.col] = 0;
    }



};

