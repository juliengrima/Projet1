const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'restaurant',
  database : 'restaurant',
});

module.exports  =  connection;