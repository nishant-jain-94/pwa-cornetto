var https = require('https');
var fs = require('fs');
var express = require('express');
var path = require('path');

var options = {
	key: fs.readFileSync('key.pem'),
	cert: fs.readFileSync('cert.pem')
};


var app = express(options);

app.use(function(request,response,next) {
	console.log(request.url);
	next();
});

app.use(express.static(path.join(__dirname+'/public')));


https.createServer(options,app).listen({port: 8080,host:'127.0.0.1'}, function() {
	console.log('server listening')
});
