const express = require('express');

const db = require('../data/dbConfig');

const router = express.Router();

router.get('/', (req, res) => {
    db('recipes')
        .then(recipes => {
            res.status(200).json(recipes)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Failed to get recipes'})
        })
})

module.exports = router;