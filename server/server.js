const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, '../www/assets/icon', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../www')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../www/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('<span style="font-size: 24px; font-family: Roboto, Helvetica, Arial, sans-serif; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; align-content: center;">404 - Resource Not Found</span>');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 3000);
  res.render('error');
});

module.exports = app;
