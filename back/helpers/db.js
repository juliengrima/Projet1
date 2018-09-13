const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'TestPassword1',
  database : 'restaurantsList',
});

module.exports  =  connection;