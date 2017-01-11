var dbConnection = require('../infra/connectionFacture');
console.log('connection is working');
module.exports = function(app){
  //set up the first rout
  app.get('/produtos', function(req,res){
    var connection = dbConnection();
    connection.query('select * from livros', function(err,results){
      res.render('produtos/lista',{lista:results});
    });
    connection.end();
  });
}
