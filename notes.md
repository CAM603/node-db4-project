## Add package.json
- `npm init -y`

## Change package.json
- change `"test": "echo \"Error: no test specified\" && exit 1"` inside the scripts object to read: `"server": "nodemon index.js"`

## Install nodemon as a development time dependency
- `npm i nodemon -D`

## Add a “start” script 
- Start script uses node instead of nodemon to run index.js so we can deploy the API later
- Inside the scripts object add `"start": "node index.js"`

## Install dotenv as a production dependency
- `npm install dotenv`

## Create index.js
- It's recommended to load configuration for .env as early as possible
- Add `require('dotenv').config();` at the very top
- Add .env folder
    * Inside define port as `PORT=5000`
- Make sure to add .env to .gitignore to prevent it from being uploaded to GitHub
    * `npx gitignore node` does this easily!
- Add into index.js
    * `const server = require('./api/server.js')`
    * `const PORT = process.env.PORT || 4000`
    *  server.listen(PORT, () => {
            console.log(`Lisitening on port ${PORT}...`)
    })

## Install Dependencies
- `npm install knex sqlite3`
- `npm install express`
- `npm install -g knex`
- `knex init`

## Add data folder

## Edit knexfile.js
//////////// **BEFORE** /////////////////////
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },
}
////////////// **AFTER** ///////////////////
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      *filename: './data/recipes.db3'* <--
    },
    *useNullAsDefault: true,* <--
    migrations: {
      *directory: './data/migrations'* <--
    },
    seeds: {
      *directory: './data/seeds'* <--
    },
  },
/////////////////////////////////

## Add server.js with
const express = require('express');

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
    res.send('<h1>Hello from Node db4 Project</h1>')
});

module.exports = server;

## Add recipes folder with recipes-router.js with
const express = require('express');

const router = express.Router();

///// Requests here

module.exports = router;

## In server.js add:
const recipesRouter = require('./recipes/recipes-router');

server.use('/api/recipes', recipesRouter);

## Add dbConfig.js in data folder with
const knex = require('knex');

const configOptions = require('../knexfile').development;

module.exports = knex(configOptions)

## In recipes-router.js add:
const db = require('../data/dbConfig');

## Add the following code to your knexfile in development:
*needed when using foreign keys*
  pool: {
    afterCreate: (conn, done) => {
      // runs after a connection is made to the sqlite engine
      conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
    },
  },

## Create a migration
- `knex migrate:make create_recipes_table`

## In new migration file
- Create table
- Add migration functions: `knex migrate:latest`