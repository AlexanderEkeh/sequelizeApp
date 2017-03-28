var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var methodOverride = require("method-override");

var application_controller = require('./controllers/application_controller');
var burgers_controller = require('./controllers/burgers_controller');
var store_controller = require('./controllers/store_controller');

var app = express();
app.use(methodOverride('_method'));
// view engine setup
app.set('views', path.join(__dirname, 'views'));

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// handlebars setup
// override with POST having ?_method=DELETE
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(process.cwd() + '/public'));
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));

app.use('/', application_controller);
app.use('/burgers',burgers_controller);


app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: (app.get('env') === 'development') ? err : {}
  });
});


// our module get's exported as app.
module.exports = app;


// var port = process.env.PORT || 3000;
// app.listen(port);