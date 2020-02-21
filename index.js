require('dotenv').config();

const server = require('./server.js');

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
    console.log(`Lisitening on port ${PORT}...`)
    console.log(`Lisitening on port ${process.env.MESSAGE}...`)
})