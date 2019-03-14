var express = require('express');
var path = require('path');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bCards = require("./libraries/b-cards");
var bNumbers = require("./libraries/b-numbers");

app.use(express.static(__dirname));

/*Main page application*/
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/html/index.html'));
});

/*Generate a new bingo card*/
app.post('/generate', function (req, res) {
    res.send({'cardsNumbers' : new bCards().anCard()});
});

/*Generate a new bingo card*/
app.post('/get-numbers', function (req, res) {
    var intervalGenerate = setInterval(function() {
        io.emit('randNumbers', new bNumbers().generateNumber());
    }, 5000);
});

/*Connection to socket*/
io.on('connection', function () {
    console.log('a user is connected')
});

/*Set listening port*/
var server = http.listen(3000,function () {
    console.log('server is running on port', server.address().port);
});