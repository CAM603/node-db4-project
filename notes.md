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
    - Inside define port as `PORT=5000`
- Make sure to add .env to .gitignore to prevent it from being uploaded to GitHub
    - `npx gitignore node` does this easily!