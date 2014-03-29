var express = require('express');
var app = express();
var path = require('path');
var log = require('./lib/log')(module);
var config = require('./config');
var mongoose = require('./lib/mongoose');
var HttpError = require('./error').HttpError;
var MongoStore = require('connect-mongo')(express);

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.methodOverride());

app.use(express.static(path.join(__dirname, "public")));

app.use(app.router);
require('./routes')(app);

app.use(require('./middleware/sendHttpError'));

app.get('/api', function (req, res) {
    res.send('API is running');
});

app.listen(function(){
    log.info('Express server listening on port 1337');
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