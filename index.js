const express = require('express'),
      app = express();

/*Main page application*/
app.get('/', function (req, res) {
   res.send('Hello server');
});

/*Generate a new bingo card*/
app.post('/', function (req, res) {
//...
});

/*Set localhost port*/
app.listen(3000, function() {
   console.log('Application has been started on port 3000!'); 
});