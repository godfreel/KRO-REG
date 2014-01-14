var express = require('express');
var http = require('http');
var path = require('path');
var url = require('url');


var app = express();

app.engine('ejs', require('ejs-locals'));
app.set('views', __dirname + '/template');
app.set('view engine', 'ejs');

http.createServer(function(req, res) {
    
	var urlParsed = url.parse(req.url);
    console.log(urlParser);
	
}).listen(3000);