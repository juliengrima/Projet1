const express = require('express');
const router = express.Router();

const connection = require('../../helpers/db');

router.post('/signup', function (req, res, next) {
    const sqlQuery = "INSERT INTO users (email, password, name) VALUES (?,?,?)"
    const { email, password, name } = req.body;
    connection.query(sqlQuery, [email, password, name], function (error, results, fields) {
        if (error)
            res.status(500).json({ flash: error.message });
        else
            res.status(200).json({ flash: "User has been signed up !" });
        // if (error)
        //     res.status(500).send(error).end();
        // res.status(200).end();
    });
});

router.get('/users', (req, res) => {
    const sqlQuery = "SELECT * FROM users"
    connection.query(sqlQuery, function (error, results, fields) {
        if (error) throw error
        res.status(200).send(results)
    })
})

router.get('/user/:id', (req, res) => {
    const sqlQuery = `SELECT * FROM users WHERE id=${req.params.id}`
    connection.query(sqlQuery, function (error, results, fields) {
        if (error) throw error
        res.status(200).send(results)
    })
})

module.exports = router;