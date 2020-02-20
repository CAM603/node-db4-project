const express = require('express');

const recipesRouter = require('./recipes/recipes-router');

const server = express()

server.use(express.json())

server.use('/api/recipes', recipesRouter);

server.get('/', (req, res) => {
    res.send('<h1>Hello from Node db4 Project</h1>')
});

module.exports = server;