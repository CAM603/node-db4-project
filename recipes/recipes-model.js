const db = require('../data/dbConfig');

module.exports = {
    get,
    getShoppingList,
    getInstructions,
    getAllIngredients,
    getIngredients
}

function get() {
    return db('recipes')
}

function getShoppingList(recipe_id) {
    return db('recipe_ingredients')
        .join('ingredients', 'recipe_ingredients.ingredient_id', 'ingredients.id')
        .join('recipes', 'recipe_ingredients.recipe_id', 'recipes.id')
        .select('recipes.recipe_name', 'ingredients.ingredient_name', 'recipe_ingredients.amount')
        .where({recipe_id: recipe_id})
}
/*
SELECT recipes.recipe_name, ingredients.ingredient_name, recipe_ingredients.amount  FROM recipe_ingredients
JOIN ingredients ON recipe_ingredients.ingredient_id = ingredients.id
JOIN recipes ON recipe_ingredients.recipe_id = recipes.id
WHERE recipe_ingredients.recipe_id = 1
*/
function getInstructions(recipe_id) {
    return db('steps')
        .join('recipes', 'steps.recipe_id', 'recipes.id')
        .select('recipes.recipe_name', 'steps.step_number', 'steps.description')
        .where({recipe_id: recipe_id})
        .orderBy('steps.step_number')
}
/*
SELECT recipes.recipe_name, steps.step_number, steps.description FROM steps
JOIN recipes ON steps.recipe_id = recipes.id
WHERE steps.recipe_id = 1
ORDER BY steps.step_number
*/

function getAllIngredients() {
    return db('ingredients')
}

function getIngredients(recipe_id) {
    return db('recipes')
        .join('ingredients', 'recipes.recipe_id', 'ingredients.id')
        .where({recipe_id: recipe_id})
}
/*
SELECT recipes.recipe_name, ingredients.ingredient_name, recipe_ingredients.amount  FROM recipe_ingredients
JOIN ingredients ON recipe_ingredients.ingredient_id = ingredients.id
JOIN recipes ON recipe_ingredients.recipe_id = recipes.id
WHERE recipe_ingredients.ingredient_id = 3
*/