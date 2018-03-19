var bodyParser = require('body-parser');

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {
    app.get('/', (req, res) => {
        res.render('index');
    });
    
    app.get('/person/:id', (req, res) => {
        res.render('person', { id: req.params.id, Qstr: req.query.qsrt });
    });
    
    app.get('/person', (req, res) => {
        res.send('hello person');
    });
    
    app.post('/person', urlencodedParser, (req, res) => {
        var text = '';
        text += 'Thank You!<br />';
        text += 'First Name: '+ req.body.firstname + '<br />';
        text += 'Last Name: '+ req.body.lastname + '<br />';
        res.send(text);
    });
}