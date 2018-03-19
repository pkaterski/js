var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();

module.exports = function(app) {
    app.post('/personjson', jsonParser, (req, res) => {
        var text = '';
        text += 'Thank You for the JSON File!\n';
        text += 'First Name: '+ req.body.firstname + '\n';
        text += 'Last Name: '+ req.body.lastname + '\n';
        console.log(text);
    });
    
    app.get('/api/person/:id', (req, res) => {
        // get that data from the database
        res.json( { firstname: 'Pesho', lastname: 'Ivanov' } );
    });
    
    app.post('/api/person', (req, res) => {
        // save to the database
    });
    
    app.delete('/person/:id', (req, res) => {
        // delete from database
    });
}