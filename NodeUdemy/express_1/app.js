var express = require('express');
var htmlController = require('./controllers/htmlController');
var apiController = require('./controllers/apiController');

var app = express();

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', (req, res, next) => {
    console.log('Request URL ' + req.url);
    next();
});

htmlController(app);

apiController(app);

app.listen(3000);