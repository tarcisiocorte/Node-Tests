module.exports = function(app){
  //set up the first rout
  app.get('/produtos', function(req,res){
    var mysql = require('mysql');
    var connection = mysql.createConnection({
      host :'localhost',
      user : 'root',
      password : '',
      database : 'casadocodigo'
    });

    connection.query('select * from livros', function(err,results){
      res.render('produtos/lista',{lista:results});
    });
    connection.end();
  });
}
