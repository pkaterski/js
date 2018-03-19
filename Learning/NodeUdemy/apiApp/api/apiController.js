var bodyParser = require('body-parser');
var todoModel = require('../models/todoModel');

module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended:true }));

    app.get('/todos/:uname', (req, res) => {
        todoModel.find({ username: req.params.uname }, (err, todos) => {
            if (err) throw err;
            else res.send(todos);
        });
    });

    app.get('/todo/:id', (req, res) => {
        todoModel.findById({ _id: req.params.id }, (err, todos) => {
            if (err) throw err;
            else res.send(todos);
        });
    });

    app.post('/todo', (req, res) => {
        if (req.body.id) {
            todoModel.findByIdAndUpdate(req.params.id, {
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            }, (err, todo) => {
                if (err) throw err;
                else res.send('Success!');
            });
        }

        else {
            var newTodo = todoModel({
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });

            newTodo.save((err) => {
                if (err) throw err;
                else res.send('Success');
            })
        }
    });

    app.delete('/todo', (req, res) => {
        todoModel.findByIdAndRemove(req.body.id, (err) => {
            if (err) throw err;
            else res.send('Success');
        });
    });
}