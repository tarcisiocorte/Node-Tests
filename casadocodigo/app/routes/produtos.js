module.exports = function(app) {
    app.get("/produtos", function(req, res) {
    var connection = app.infra.connectionFactory();
    connection.query('select * from livros', function(erros, resultado){
        res.render('produtos/lista',{lista: resultado});
        });
        connection.end();
    });
}
