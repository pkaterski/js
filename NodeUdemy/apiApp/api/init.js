var todoModel = require('../models/todoModel');

module.exports = (app) => {
    app.get('/todo/setup', (req, res) => {
        // seed db
        var data = [
            {
                username: 'gosho',
                todo: 'Learn Node',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'iva',
                todo: 'Buy Eggs',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'tsetsa',
                todo: 'Buy Cigarettes',
                isDone: false,
                hasAttachment: false
            }
        ];

        todoModel.create(data, (err, data) => {
            if (err) throw err;
            res.send(data);
        });
    });
}