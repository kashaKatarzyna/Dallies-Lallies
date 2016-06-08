var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var mongoose = require('mongoose');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

mongoose.connect(process.env.MONGOLAB_MAROON_URI || 'mongodb://localhost/dalliesandlallies');

// app.use(express.static('public'));
// app.use(express.static('node_modules'));

app.use(bodyParser.json());   // This is the type of body we're interested in
app.use(bodyParser.urlencoded({extended: false}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));


app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;

  // var params = {
  //       images_file: fs.createReadStream('./public/images/mt.jpg')
  //       // url:'http://www.aspca.org/sites/default/files/styles/medium_image_300x200/public/field/image/plants/saint-bernards-lily.jpg?itok=dBOzAWD_',
  //       // classifier_ids: fs.readFileSync('./classifierlist.json')
  // };

  // visual_recognition.classify(params, function(err, res) {
  // if (err)
  //   console.log(err);
  // else
  //   console.log(JSON.stringify(res, null, 2));
  // });


