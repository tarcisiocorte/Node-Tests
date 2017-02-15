var http = require('http');

var configuracoes = {
    hostname: 'localhost',
    port:3000,
    path: '/produtos',
    method: 'post',
    headers: {
        'Accept':'application/json',
        'Content-type':'application/json'
    }
};

var client = http.request(configuracoes, function(res){
  console.log(res.statusCode);
  res.on('data',function(body){
      console.log('copo'+body);
  });
});

var produto = {
  titulo: 'Ok, vou fazer um titulo',
  descricao: 'esse é outro livro de node',
  preco: 100
}

client.end(JSON.stringify(produto));
