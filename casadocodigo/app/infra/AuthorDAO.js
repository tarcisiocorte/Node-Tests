function AuthorDAO(connection){
  this._connection = connection;
}

AuthorDAO.prototype.list = function(callback){
  this._connection.query('select * from author', callback);
}

AuthorDAO.prototype.save = function(author,callback){
  console.log(author);
  this._connection.query('insert into author set ?', author, callback);
}

module.exports = function(){
  return AuthorDAO;
}
