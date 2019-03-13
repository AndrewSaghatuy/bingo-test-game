const express = require('express');
const app = express();
const path = require('path');

app.use('/public/css',express.static(__dirname +'/public/css'));

/*Main page application*/
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/html/index.html'));
});

/*Generate a new bingo card*/
app.post('/', function (req, res) {
//...
});

/*Set localhost port*/
app.listen(3000, function() {
   console.log('Application has been started on port 3000!'); 
});