var express = require('express');
var http = require('http');
var path = require('path');
var url = require('url');
var config = require('./config');

var app = express();

app.engine('ejs', require('ejs-locals'));
app.set('views', __dirname + '/template');
app.set('view engine', 'ejs');

app.use(express.favicon());

var server = http.createServer(app);

server.listen(config.get('port'), function () {
	console.log("Express server started up");
});