var express = require('express');
var mongoose = require('mongoose');
var config = require('./config');
var initData = require('./api/init');
var apiController = require('./api/apiController');

var port = process.env.PORT || 3000;

var app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', { title: config.getDbConnectionString() });
});

mongoose.connect(config.getDbConnectionString());

initData(app);

apiController(app);

app.listen(port);