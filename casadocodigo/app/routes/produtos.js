module.exports = function(app){
  //set up the first rout
  app.get('/produtos', function(req,res){
    res.render("produtos/lista");
  });
}
