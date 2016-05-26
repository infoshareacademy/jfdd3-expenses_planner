'use strict';

$('#sendForm').on('click', function() {
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
for (var i = 0; i <= 6; i=i+1) {
    var z =[1,2,3,4,5,6,7,8,9,10];
   var x= z.splice(Math.round(Math.random()*z.length),1)[0];
    var y = Math.round(Math.random()*z.length);
    coords.push({x: x, y: y});
}
coords.forEach(function (item) {
  // $('td[x=' + x +'][y=' + y + ']').css ({ "background-color": "red"});
  $('td[x=' + item.x +'][y=' + item.y + ']').css ({ "background-color": "red"});

})





    $('#game').css({

        height:"100vh"
    });

});


function createBoard(height, width) {
    var $board = $('<table>');
    var $row, $data;

    for (var y = 0; y < height; y += 1) {
        $row = $("<tr>");
        for (var x = 0; x < width; x += 1) {
            $data = $('<td>')
                .addClass('cell').attr('x', x).attr('y',y);
            $row.append($data);
        }
        $board.append($row);
    }
    return $board;
}








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