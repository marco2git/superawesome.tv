var os = require("os");
var express = require('express');
var mustacheExpress = require('mustache-express');

var port = 12345;

var app = express();
app.use(express.static('public'));
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
    res.render('index', {hostname: os.hostname()});
});

var server = app.listen(port, function () {
    console.log('Listening on port %s', port);
});
