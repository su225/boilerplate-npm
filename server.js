'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var PORT = process.env.PORT || 6666;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {
  console.log(`${req.method} ${req.url} - ${req.ip}`);
  next();
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html')
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/json', function (req, res) {
  res.json({ message: "Hello express" });
});

app.get('/now', function (req, res, next) {
  req.time = new Date().toString();
  next();
}, function (req, res) {
  res.json({ time: req.time });
});

app.get('/:word/echo', function (req, res) {
  res.json({ echo: req.params['word'] });
});

app.get('/name', function (req, res) {
  res.json({
    firstname: req.query['first'],
    lastname: req.query['last'],
  })
});

app.post('/body', function (req, res) {
  res.json(req.body);
});

app.listen(PORT, function () {
  console.log(`Node.js listening on ${PORT}...`);
});

