var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Ready');
});

app.listen(9000, function () {
  console.log('Listening on port 9000');
});
