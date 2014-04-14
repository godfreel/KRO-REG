var express = require('express');
var app = express();
var path = require('path');
var log = require('./lib/log')(module);

var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var favicon        = require('static-favicon');
var cookieParser   = require('cookie-parser');

var config = require('./config');
var mongoose = require('./lib/mongoose');
var HttpError = require('./error').HttpError;
// var MongoStore = require('connect-mongo')(express);

app.use(favicon());
app.use(morgan('dev'));
app.use(bodyParser());
app.use(cookieParser());
app.use(methodOverride());

app.use(express.static(path.join(__dirname, "public")));

require('./routes')(app);

app.use(require('./middleware/sendHttpError'));

app.get('/api', function (req, res) {
    res.send('API is running');
});

var port = process.env.PORT || 1337;
app.listen(port, function() {
  console.log("Listening on " + port);
});

app.use(function(req, res, next){
    res.status(404);
    log.debug('Not found URL: %s',req.url);
    res.send({ error: 'Not found' });
    return;
});

app.use(function(err, req, res, next){
    res.status(err.status || 500);
    log.error('Internal error(%d): %s',res.statusCode,err.message);
    res.send({ error: err.message });
    return;
});