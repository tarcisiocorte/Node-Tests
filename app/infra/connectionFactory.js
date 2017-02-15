var mysql = require('mysql');

var connectMYSQL = function(){
    if(!process.env.NODE_ENV){
        return mysql.createConnection({
                host:'localhost',
                user:'root',
                password:'T@T@9814412',
                database:'casadocodigo'
        });
    }
    
    if(process.env.NODE_ENV == 'test'){
        return mysql.createConnection({
                host:'localhost',
                user:'root',
                password:'T@T@9814412',
                database:'casadocodigotest'
        });
    }
};

module.exports = function(){
    return connectMYSQL;
}
