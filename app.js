var http = require('http');
var url = require('url');

http.createServer(function(req, res) {
    
	var urlParsed = url.parse(req.url);
    console.log(urlParser);
	
}).listen(3000);