//This file will configure the web server that will serve up the files in the source directory
var express = require('express');
var path = require('path');
var open = require('open');
import webpack from 'webpack';
import config from '../webpack.config.dev';

var port = 3000;
var app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.get('/', function(req,res){
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res) {
// Hard coding for simplicity. Pretend this hits a real database
	res.json([
		{"id": 1,"firstName":"Akash","lastName":"Dedly","email":"akash@gmail.com"},
		{"id": 2,"firstName":"Sujay","lastName":"Krishna","email":"sujay@yahoo.com"},
		{"id": 3,"firstName":"Rakshith","lastName":"Boss","email":"boss@hotmail.com"}
	]);
});

app.listen(port, function(err){
	if(err){
		console.log(err); // eslint-disable-line no-console
	}else{
		open('http://localhost:' + port);
	}
});
