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


// Game constant options - movement

// Movement
// 7  0  1
// 6     2
// 5  4  3

var DIR = {UP: 0, UPRIGHT: 1, RIGHT: 2, DOWNRIGHT: 3, DOWN: 4, DOWNLEFT: 5, LEFT: 6, UPLEFT: 7};
var DIRX = [0, 1, 1, 1, 0, -1, -1, -1];
var DIRY = [-1, -1, 0, 1, 1, 1, 0, -1];

var Point = function (x, y, dir) {
    this.x = x + (DIRX[dir] || 0);
    this.y = y + (DIRY[dir] || 0);
};

//var dir = DIR.UP;
//var newPosition = {x : DIRX[dir], y: DIRX[dir] }

function horizontal(dir) {
    return (dir === DIR.LEFT) || (dir === DIR.RIGHT)
}
function vertical(dir) {
    return (dir === DIR.UP) || (dir === DIR.DOWN)
}

var arrow = {left: 37, up: 38, right: 39, down: 40};
var handled = false;

get: function (p, dir) {
    return this.cells[p.x + (DIRX[dir]) || 0][p.y + (DIRY[dir] || 0)].object;
}
,


//Sprite IMG and code


//Player Script

$(document).keydown(function (ev) {
    var keyCode = ev.keyCode || ev.which;
    switch (ev.keyCode) {
        case arrow.left:
            moving.startLeft();
            handled = true;
            console.log('left');
            break;
        case arrow.up:
            moving.startUp();
            handled = true;
            console.log('up');
            break;
        case arrow.right:
            console.log('right');
            moving.startRight();
            handled = true;
            break;
        case arrow.down:
            console.log('down');
            moving.startDown();
            handled = true;
            break;
    }
    if (handled)
        ev.preventDefault();
});

$(document).keyup(function (ev) {
        switch (ev.keyCode) {
            case arrow.left:
                moving.stopLeft();
                handled = true;
                console.log('stopleft');
                break;
            case arrow.up:
                moving.stopUp();
                handled = true;
                console.log('stopup');
                break;
            case arrow.right:
                console.log('stopright');
                moving.stopRight();
                handled = true;
                break;
            case arrow.down:
                console.log('stopdown');
                moving.stopDown();
                handled = true;
                break;
        }
    }
);

//Player Movement

var moving = {
    dir: DIR.NONE,
    lastXDir: DIR.NONE,
    up: false, down: false, left: false, right: false,
    startUp: function () {
        this.up = true;
        this.dir = DIR.UP;
    },
    startDown: function () {
        this.down = true;
        this.dir = DIR.DOWN;
    },
    startLeft: function () {
        this.left = true;
        this.dir = DIR.LEFT;
    },
    startRight: function () {
        this.right = true;
        this.dir = DIR.RIGHT;
    },
    stopUp: function () {
        this.up = false;
        this.dir = (this.dir == DIR.UP) ? this.where() : this.dir;
    },
    stopDown: function () {
        this.down = false;
        this.dir = (this.dir == DIR.DOWN) ? this.where() : this.dir;
    },
    stopRight: function () {
        this.right = false;
        this.dir = (this.dir == DIR.RIGHT) ? this.where() : this.dir;
    },
    stopLeft: function () {
        this.left = false;
        this.dir = (this.dir == DIR.LEFT) ? this.where() : this.dir;
    },
    where: function () {
        if (this.up)
            return DIR.UP;
        else if (this.down)
            return DIR.DOWN;
        else if (this.left)
            return DIR.LEFT;
        else if (this.right)
            return DIR.RIGHT;
    }
};

//Player Movement