var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    // NOT SURE
    res.header('Access-Control-Allow-Headers', '*');

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    }
    next();
});

// DB Connect String
var dbstr = 'mongodb://hero:babevbaby@127.0.0.1:27017/Heroes';

mongoose.connect(dbstr, (err) => {
    if (err) console.error(err);
    else console.log('Successfully Connected to Database\n');
});

// Mongoose Schema & Model
var Schema = mongoose.Schema;
var heroSchema = new Schema({
    id: Number,
    name: String
});
var Hero = mongoose.model('Hero', heroSchema);

// RESTful API
app.get('/api/mockup', (req, res) => {
    var mockHeroes = [
        { id: 11, name: 'Mr. Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
    ];

    Hero.find({}, (err, result) => {
        // only if the db hasnt been inited
        if (!result.length) {
            Hero.create(mockHeroes, (err, result) => {
                if (err) res.send('An Error Occured While Adding Mockup to DB');
                else res.send('Successfully Added Mockup');
            });
        } else {
            res.send('Mockup Already Created!');
        }
    });
});

app.get('/api/reset', (req, res) => {
    Hero.remove({}, (err) => {
        if (err) res.send('An Error Occured While Resetting the DB ' + err);
        else res.send('Successfully Reseted DB');
    });
});

app.get('/api/heroes', (req, res) => {
    Hero.find({}, (err, result) => {
        if (err) res.send('An Error Occured While Fetching Data');
        else res.send(result);
    });
});

app.get('/api/hero/:id', (req, res) => {
    Hero.find({ id: req.params.id }, (err, result) => {
        if (err) res.send('An Error Occured While Fetching Data');
        else res.send(result[0]); // single hero as object not array of 1 obj
    });
});

app.post('/api/hero', (req, res) => {
    if (!req.body.id) res.send('Create Hero: No ID Provided!');
    else if (!req.body.name) res.send('Create Hero: No Name Provided!');
    else {
        Hero.find({ id: req.body.id }, (err, result) => {
            if (!result.length) {
                // Create New Hero
                var newHero = Hero({
                    id: req.body.id,
                    name: req.body.name
                });
                newHero.save((err, result) => {
                    if (err) res.send('Create Hero: An Error Occured!');
                    else res.send('Create Hero: Success');
                });
            } else {
                res.send('Create Hero: Hero Already Exists!');
            }
        });
    }
});

app.put('/api/hero', (req, res) => {
    if (!req.body.id) res.send('Update Hero: No ID Provided!');
    else if (!req.body.name) res.send('Update Hero: No Name Provided!');
    else {
        Hero.find({ id: req.body.id }, (err, result) => {
            if (result.length) {
                // Update Hero
                Hero.findOneAndUpdate({ id: req.body.id }, {
                    id: req.body.id,
                    name: req.body.name
                }, (err, result) => {
                    if (err) res.send('Update Hero: An Error Occured! ' + err);
                    else res.send('Update Hero: Success');
                });
            } else {
                res.send('Update Hero: No Such Hero!');
            }
        });
    }
});

app.delete('/api/hero', (req, res) => {
    if (!req.body.id) res.send('Delete Hero: No ID Provided!');
    else {
        Hero.find({ id: req.body.id }, (err, result) => {
            if (result.length) {
                // Delete Hero
                Hero.findOneAndRemove({ id: req.body.id }, (err) => {
                    if (err) res.send('Delete Hero: An Error Occured!');
                    else res.send('Delete Hero: Success');
                });
            } else {
                res.send('Delete Hero: No Such Hero!');
            }
        });
    }
});


// Shit
app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(3000);