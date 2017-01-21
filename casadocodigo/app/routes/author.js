module.exports = function(app){
    var listAuthor = function(req,res){
        var connection = app.infra.connectionFactory();
        var authorDAO = new app.infra.AuthorDAO(connection);
        authorDAO.list(function(err,result){
            res.render('author/list',{list:result});
            });
        connection.end();
    };

  app.get('/author', listAuthor);

  app.get('/author/form', function(req, res){
      res.render('author/form');
  });
}
