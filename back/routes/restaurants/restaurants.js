const express = require('express');
const router = express.Router();
const connection = require('../../helpers/db');

router.post('/signup', function (req, res, next) {
  const sqlQuery = "INSERT INTO users (email, password, name, lastname) VALUES (?,?,?,?)"
  const { email, password, name, lastname } = req.body;
  connection.query(sqlQuery, [email, password, name, lastname], function (error, results, fields) {
    if (error)
      res.status(500).send(error).end();
    res.status(200).end();
  });
});

module.exports = router;