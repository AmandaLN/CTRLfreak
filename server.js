const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routes = require("./routes");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const flash = require('connect-flash');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(logger('dev'));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(flash());


/* Serve up static assets (usually on heroku) */
if (process.env.NODE_ENV === "production") {
  app.use(passport.session()); app.use(express.static(path.join(__dirname, './client/build')));

};
// Add routes, both API and view
app.use(routes);

/* === Express 404 error handler === */
app.use(function (req, res, next) {
  var err = new Error('404 in Server.js, route Not Found');
  err.status = 404;
  next(err);
});

/* === Server-Side Authentication w/passport.js on our Model === */
const Account = require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());


// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/ctrlBudget"
);

/* Development error handler will print stacktrace */
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

/* Production error handler no stacktraces leaked to user */
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT http://localhost:${PORT}`);
});
