var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000))

app.get('/', function(req, res) {
    res.send('Hello world');
});

app.get('/about*', function(req, res) {
    res.send('About page goes here');
});

app.use(404, function(req, res) {
	res.type('text/plain');
    res.status(404);
	res.send('404 - page not found');
});

app.use(500, function(req, res) {
	console.log(err.stack);
	res.type('text/plain');
    res.status(500);
	res.send('500 - server error');
});

app.listen(app.get('port'), function() {
    console.log('Server started at localhost:' + app.get('port'));
});
