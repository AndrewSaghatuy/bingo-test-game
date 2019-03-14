$(document).ready(function() {
    /*Generate bingo cards*/
    $("#btn-generate").click(function () {
        $.post("/generate",
        function (data) {
            if (data.hasOwnProperty('cardsNumbers')) {
                data.cardsNumbers.map(function (value, key) {
                    $('td[data-square="' + key + '"]').html(value);
                });
            }
        });
    });
});