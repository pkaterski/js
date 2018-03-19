var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.render('index', { title: 'HElllo' });
});

mongoose.connect('mongodb://tester:babevbaby@127.0.0.1:27017/apiTesting');

// model
var schema = new mongoose.Schema({
    username: String,
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean
});

var Todo = mongoose.model('Todos', schema);

app.get('/api/init', (req, res) => {
    // seed database
    var data = [
        {
            username: 'pesho',
            todo: 'buy milk',
            isDone: false,
            hasAttachment: false
        },
        {
            username: 'pesho',
            todo: 'buy games',
            isDone: false,
            hasAttachment: false
        },
        {
            username: 'pesho',
            todo: 'do hm',
            isDone: false,
            hasAttachment: false
        }
    ];

    Todo.find({}, (err, result) => {
        // only if the db hasnt been inited
        if (!result.length) {
            Todo.create(data, (err, data1) => {
                if (err) throw err;
                res.send('Inited');
            });
        } else {
            
            res.send('Already inited!');
        }
    });
    
});

app.get('/api/todos/:uname', (req, res) => {
    Todo.find({ username: req.params.uname }, (err, dataFound) => {
        if (err) throw err;
        else {
            res.send(dataFound);
        }
    });
});

app.post('/api/todo', (req, res) => {
    if (req.body.id) {
        Todo.findByIdAndUpdate(req.body.id, {
            todo: req.body.todo,
            isDone: req.body.isDone,
            hasAttachment: req.body.hasAttachment
        }, (err, dataRes) => {
            if (err) throw err;
            else res.send('Updated!');
        });
    }

    else {
        Todo.create({
            username: 'pesho browser',
            todo: req.body.todo,
            isDone: req.body.isDone,
            hasAttachment: req.body.hasAttachment
        }, (err, dataRes) => {
            if (err) throw err;
            else res.send('Created New!');
        });
    }
});

app.delete('/api/todo', (req, res) => {
    Todo.findByIdAndRemove(req.body.id, (err) => {
        if (err) throw err;
        else res.send('Deleted');
    });
});



// var Schema = mongoose.Schema;

// var animalSchema = new Schema({
//     animal: String,
//     type: String
// });

// animalSchema.methods.findSimilar = function() {
//     this.model('Animal').find({ type: this.type }, (err, sim) => {
//         console.log(sim);
//     });
// }

// var Animal = mongoose.model('Animal', animalSchema);

// var dog = new Animal({
//     animal: 'Dog',
//     type: 'dog'
// });

// var wolf = new Animal({
//     animal: 'Wolf',
//     type: 'dog'
// });

// // dog.save((err) => {
// //     if (err) throw err;
// //     else console.log('dog added');
// // });

// // wolf.save((err) => {
// //     if (err) throw err;
// //     else console.log('wolf added');
// // });

// dog.findSimilar()

app.listen(3000);