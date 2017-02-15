var mysql = require('mysql');

var connectMYSQL = function(){
    return mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'T@T@9814412',
            database:'casadocodigo'
    });
};

module.exports = function(){
    return connectMYSQL;
}
