var express = require('../config/express')();
var request = require('supertest')(express);

describe('#ProdutosController', function(){
    beforeEach(function(done){
      var conn = express.infra.connectionFactory();
      conn.query('delete from livros', function(ex, result){
        if(!ex){
          done();
        }
      });
    });

    it('#listagem json',function(done){
      request.get('/produtos')
      .set('Accept','application/json')
      .expect('Content-Type',/json/)
      .expect(200,done);
    });

    it('#cadastro de novo produto com dados invalidos', function(done){
      request.post('/produtos')
      .send({titulo:"", descricao:" novo livros ..."})
      .expect(400, done);
    });

    it('#cadastro de novo produto com dados validos', function(done){
      request.post('/produtos')
      .send({titulo:"cadastrado pelo test", descricao:"novo produto, cadastrado pelo test", preco:10.98})
      .expect(302, done);
    });
});
