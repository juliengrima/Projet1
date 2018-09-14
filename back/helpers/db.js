const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'react',
  password : 'root',
  database : 'restaurant',
});

module.exports  =  connection;