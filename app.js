var express = require('express');
var http = require('http');
var path = require('path');
var config = require('config');
var log = require('lib/log')(module);
var mongoose = require('lib/mongoose');
var HttpError = require('error').HttpError;
var MongoStore = require("connect-mongo")(express);

var app = express();

app.engine('ejs', require('ejs-locals'));
app.set('views', __dirname + '/template');
app.set('view engine', 'ejs');

app.use(express.favicon());

if (app.get('env') == 'development') {
  app.use(express.logger('dev'));
} else {
  app.use(express.logger('default'));
}

app.use(express.bodyParser());

app.use(express.cookieParser());

<<<<<<< HEAD
var MongoStore = require('connect-mongo')(express);

app.use(express.session({
  secret: config.get('session:secret'),
  key: config.get('session:key'),
=======
app.use(express.session({
  key: config.get('session:key'),
  secret: config.get('session:secret'),
>>>>>>> 149cb2217e74bf0f87aaf0c4797d70494537cfc0
  cookie: config.get('session:cookie'),
  store: new MongoStore({mongoose_connection: mongoose.connection})
}));

<<<<<<< HEAD
=======
app.use(function(req, res, next){
  req.session.numberOfVisits = req.session.numberOfVisits + 1 || 1;
  res.send("Visits: " + req.session.numberOfVisits);
});

>>>>>>> 149cb2217e74bf0f87aaf0c4797d70494537cfc0
app.use(require('middleware/sendHttpError'));

app.use(app.router);

require('routes')(app);

app.use(express.static(path.join(__dirname, 'public')));


app.use(function(err, req, res, next) {
  if (typeof err == 'number') { // next(404);
    err = new HttpError(err);
  }

  if (err instanceof HttpError) {
    res.sendHttpError(err);
  } else {
  if (app.get('env') == 'development') {
      express.errorHandler()(err, req, res, next);
  } else {
      log.error(err);
      err = new HttpError(500);
      res.sendHttpError(err);
    }
  }
});


http.createServer(app).listen(config.get('port'), function(){
  log.info('Express server listening on port ' + config.get('port'));
});

