const express = require('express');

const Recipes = require('./recipes-model');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.get()
        .then(recipes => {
            res.status(200).json(recipes)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Failed to get recipes'})
        })
})

router.get('/:id/shoppingList', (req, res) => {
    Recipes.getShoppingList(req.params.id)
        .then(list => {
            res.status(200).json(list)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Failed to get shopping list' })
        })
})

router.get('/:id/instructions', (req, res) => {
    Recipes.getInstructions(req.params.id)
        .then(steps => {
            res.status(200).json(steps)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Failed to get instructions'})
        })
})

router.get('/ingredients', (req, res) => {
    Recipes.getAllIngredients()
        .then(ingredients => {
            res.status(200).json(ingredients)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Failed to get all ingredients' })
        })
})

router.get('/ingredients/:id/recipes', (req, res) => {
    Recipes.getIngredients(req.params.id)
        .then(ingredients => {
            res.status(200).json(ingredients)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Failed to get ingredients' })
        })
})

module.exports = router;