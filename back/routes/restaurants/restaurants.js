const express = require('express');
const router = express.Router();
const connection = require('../../helpers/db.js');
const fs = require('fs');

fs.readFile('../../restaurants.json', (err, data) => {
  if (err) throw err;
  console.log(JSON.parse(data));
});

router.get('/signup', function (req, res, next) {
  const sqlQuery = "INSERT INTO users (email, password, name, lastname) VALUES (?,?,?,?)"
  const { email, password, name, lastname } = req.body
  connection.query(sqlQuery, [email, password, name, lastname], (error, results, fields) => {
    if (error) {
      res.status(500).send(error).end();
    }
  });
});

module.exports = router;