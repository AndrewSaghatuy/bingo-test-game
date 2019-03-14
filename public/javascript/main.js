$(document).ready(function() {
    var count = 0;

    /*Connection to the socket*/
    var socket = io();
    socket.on('randNumbers', function(msg) {
        count++;
        $('#bingo-number span').show();
        $('#letter').html(msg.bingoLetter);
        $('#number').html(msg.number);
        if (count >= 75) {
            alert('Game over!!');
        }
    });

    /*Generate bingo cards*/
    $("#btn-generate").click(function () {
        $('#bingo-number span').hide();

        $.post("/generate",
            function (data) {
                if (data.hasOwnProperty('cardsNumbers')) {
                    data.cardsNumbers.map(function (value, key) {
                        $('td[data-square="' + key + '"]')
                            .html(value)
                            .css({color: '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6)});
                        $('#btn-number').show();
                    });
                }
            });
    });

    /*Get bingo number*/
    $('#btn-number').click(function () {
        $.post("/get-numbers");
        $('#btn-number').hide();
    });

    /*Select the bingo numbers*/
    $('#bingo-card td').click(function () {
        var number = $(this).html();
        if (parseInt(number)) {
            $(this).css({
                background: '#616161'
            });
        }
    });
});