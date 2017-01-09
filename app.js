'use strict';
process.env.TZ = 'Asia/Seoul';
// express 4.0
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var routes = require('./routes/index');
var morgan = require('morgan');

var app = express();
// Custom Midleware add
var checkerMidleware = require('./middleware/checker');

//Express4 에서의 bodyParser 사용
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(cookieParser());
app.use(checkerMidleware());

//app.use('/users', user);

module.exports = app;
