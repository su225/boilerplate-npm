'use strict';

var express = require('express');
var app = express();

var PORT = process.env.PORT || 6666;

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html')
});

app.get('/json', function (req, res) {
  res.json({ message: "Hello express" });
});

app.listen(PORT, function () {
  console.log(`Node.js listening on ${PORT}...`);
});

