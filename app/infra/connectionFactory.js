var mysql  = require('mysql');

function createDBConnection() {
    if(!process.env.NODE_ENV) {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234.abcd',
            database: 'casadocodigo'
        });
    }

    if(process.env.NODE_ENV == 'test') {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234.abcd',
            database: 'casadocodigo_testes'
        });
    }
}

module.exports = function() {
    return createDBConnection;
}
