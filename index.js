const express = require('express');
const app = express();
const path = require('path');

var bCards = require("./libraries/b-cards");

app.use('/public',express.static(__dirname +'/public'));

/*Main page application*/
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/html/index.html'));
});

/*Generate a new bingo card*/
app.post('/generate', function (req, res) {
    res.send({'cardsNumbers' : new bCards().anCard()});
});

/*Generate a new bingo card*/
app.post('/get-number', function (req, res) {
    //....
});

/*Set listening port*/
app.listen(3000, function() {
   console.log('Application has been started on port 3000!'); 
});