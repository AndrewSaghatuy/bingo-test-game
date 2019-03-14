$(document).ready(function() {
    /*Generate bingo cards*/
    $("#btn-generate").click(function () {
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
        
    });
});