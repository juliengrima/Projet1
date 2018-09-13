const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'lionel28',
  database : 'restaurant',
});

module.exports  =  connection;