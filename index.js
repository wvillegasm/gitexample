var express = require('express'),
	app = express(),
	PORT = 3000;

app.get('/', function(req, res) {
	res.end('hello world!');
});

app.listen(PORT, function() {
	console.log('The server is running, please, ' +
		'open your browser at http://localhost:%s', PORT);
});