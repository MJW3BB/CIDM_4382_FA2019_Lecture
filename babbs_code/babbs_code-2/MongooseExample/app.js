var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config()

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// do mongoose connection information
const mongoose = require('mongoose');

const db_user = process.env.MONGODB_ATLAS_USER;
const db_pass = process.env.MONGODB_ATLAS_PASSWORD;
const db_uri = process.env.MONGO_ATLAS_URI;

//connect
const uri2 = 'mongodb+srv://cidm4382:<password>@cidm4382-m35ko.mongodb.net/test?retryWrites=true&w=majority'
const uri = 'mongodb+srv://' + db_user + ':' + db_pass + '@cidm4382-m35ko.mongodb.net/vatsim?retryWrites=true&w=majority';
console.log(uri);
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.catch((err) => {
  console.log("DUDE, THIS SUCKS: " + err);
});

//connect to db on start
const db = mongoose.connection;  
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("DUDE, YOU'RE GETTING A DELL");
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
