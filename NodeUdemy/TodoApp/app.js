var express = require('express');
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

var port = process.env.PORT || 3000;

var app = express();

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));

mongoose.connect(config.getDbConnectionString());

setupController(app);

apiController(app);

app.listen(port);