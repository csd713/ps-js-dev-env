//This file will configure the web server that will serve up the files in the source directory
var express = require('express');
var path = require('path');
var open = require('open');

var port = 3000;
var app = express();

app.get('/', function(req,res){
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
	if(err){
		console.log(err);
	}else{
		open('http://localhost:' + port);
	}
});
