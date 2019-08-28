'use strict';

var express = require('express');
var app = express();

var PORT = process.env.PORT || 6666;

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html')
});

app.listen(PORT, function () {
  console.log(`Node.js listening on ${PORT}...`);
});

