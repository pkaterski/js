var configValues = require('./config');

module.exports = {
    getDbConnectionString: () => {
        // mongodb://username:password@host:port/database
        var dbstr = '';
        dbstr += 'mongodb://';
        dbstr += configValues.uname;
        dbstr += ':';
        dbstr += configValues.pwd;
        dbstr += '@';
        dbstr += '127.0.0.1:27017';
        dbstr += '/';
        dbstr += configValues.db;
    
        return dbstr;
    }
}