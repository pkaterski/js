var configValues = require('./config');

module.exports = {
    getDbConnectionString: () => {
        var dbstr = '';
        dbstr += 'mongodb://';
        dbstr += configValues.uname;
        dbstr += ':';
        dbstr += configValues.pwd;
        dbstr += '@';
        dbstr += '127.0.0.1:27017/TodoApp';
        return dbstr;
    }
}