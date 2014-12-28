var express = require('express'),
	app = express(),
	PORT = 3000;


app.get('/', function(req, res) {
	res.end('hello world!');
});

app.get('/name/:user_name', function(req, res) {
	res.status(200);
	res.set('Content-type', 'text/html');
	res.send("<html><body><h1>Hello " + req.params.user_name + "</h1></body></html>");
})

app.listen(PORT, function() {
	console.log('The server is running, please, ' +
		'open your browser at http://localhost:%s', PORT);
});