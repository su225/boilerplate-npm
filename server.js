'use strict';

var express = require('express');
var app = express();

var PORT = process.env.PORT || 6666;

app.get('/', function (req, res) {
  res.type('txt').send('Hello Express\n');
});

app.listen(PORT, function () {
  console.log(`Node.js listening on ${PORT}...`);
});

