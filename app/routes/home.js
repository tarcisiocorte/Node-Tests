module.exports = function(app) {
    app.get("/",function(req, res) {
        var connection = new app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function(error, results, fields){
            res.render('home/index',{livros:results});
        });
        connection.end();
    });
}