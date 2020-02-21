
exports.seed = function(knex) {
  // Inserts seed entries
  return knex('ingredients').insert([
    {ingredient_name: 'butter'},
    {ingredient_name: 'eggs'},
    {ingredient_name: 'cheddar cheese'},
    {ingredient_name: 'bread'},
    {ingredient_name: 'peanut butter'},
    {ingredient_name: 'jelly'},
    {ingredient_name: 'flour tortilla'},
    {ingredient_name: 'salsa'},
    {ingredient_name: 'onion'},
    {ingredient_name: 'pepper'}
  ]);
};
