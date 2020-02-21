exports.seed = function(knex) {
  // Inserts seed entries
  return knex('recipe_ingredients').insert([
    {recipe_id: '1', ingredient_id: '2', amount: '3 eggs'},
    {recipe_id: '1', ingredient_id: '1', amount: '2tblsp'},
    {recipe_id: '1', ingredient_id: '3', amount: 'unlimited'},
    {recipe_id: '2', ingredient_id: '4', amount: '2 slices'},
    {recipe_id: '2', ingredient_id: '5', amount: '4tblsp'},
    {recipe_id: '2', ingredient_id: '6', amount: '4tblsp'},
    {recipe_id: '3', ingredient_id: '7', amount: '1'},
    {recipe_id: '3', ingredient_id: '8', amount: '1/4 cup'},
    {recipe_id: '3', ingredient_id: '9', amount: '1/3 cup'},
    {recipe_id: '3', ingredient_id: '10', amount: '1/3 cup'},
  ]);
};
