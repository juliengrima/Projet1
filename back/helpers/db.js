const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'dbpassword12341234',
  database : 'restaurant',
});

module.exports  =  connection;