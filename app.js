// require('babel-polyfill');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./route/index');
var choice = require('./route/choice');
var epartment = require('./route/epartment');
var paper = require('./route/paper');
var papersubject = require('./route/papersubject');
var subject = require('./route/subject');
var subjectlevel = require('./route/subjectlevel');
var subjecttype = require('./route/subjecttype');
var topic = require('./route/topic');
var user = require('./route/user');



var app = express();


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/zy')));

app.use('/', index);
app.use('/choice', choice);
app.use('/epartment', epartment);
app.use('/paper', paper);
app.use('/papersubject', papersubject)
app.use('/subject', subject);
app.use('/subjectlevel', subjectlevel);
app.use('/subjecttype', subjecttype);
app.use('/topic', topic);
app.use('/user', user);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
