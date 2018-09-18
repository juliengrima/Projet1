const express = require('express');
const router = express.Router();
const connection = require('../../helpers/db');

// router.post('/signup', function (req, res, next) {
//   const sqlQuery = "INSERT INTO users (email, password, name, lastname) VALUES (?,?,?,?)"
//   const { email, password, name, lastname } = req.body;
//   connection.query(sqlQuery, [email, password, name, lastname], function (error, results, fields) {
//     if (error)
//       res.status(500).send(error).end();
//     res.status(200).end();
//   });
// });

router.get('/restaurants', (req, res) => {
  const sqlQuery = "SELECT * FROM list LIMIT 100"
  connection.query(sqlQuery, function (error, results, fields) {
    if (error) throw error
    res.status(200).send(results);
  })
})

router.post('/favorites', (req, res) => {
  const sqlQuery = "INSERT INTO favorites (name, address2) VALUES (?,?)"
  const { name, address2 } = req.body;
  connection.query(sqlQuery, [name, address2], function (error, results, fields) {
      if (error) throw error
      res.status(200).json(results)
  })
})

router.get('/favorites-list', (req, res) => {
  const sqlQuery = "SELECT * FROM favorites"
  connection.query(sqlQuery, function (error, results, fields) {
      if (error) throw error
      res.status(200).send(results)
  })
})


router.get('/favorite/:id', (req, res) => {
  const sqlQuery = `SELECT * FROM favorites WHERE id = ${req.params.id}`
  connection.query(sqlQuery, function (error, results, fields) {
      if (error) throw error
      res.status(200).send(results)
  })
})

module.exports = router;