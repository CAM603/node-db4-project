exports.seed = function(knex) {
  // Inserts seed entries
  return knex('steps').insert([
    {
      recipe_id: '1', 
      step_number: '1', 
      description: 'Add butter to medium hot pan, mix three eggs in a bowl' 
    },
    {
      recipe_id: '1', 
      step_number: '2', 
      description: 'Add egg mixture to pan, adding cheddar cheese after 2 minutes' 
    },
    {
      recipe_id: '1', 
      step_number: '3', 
      description: 'Once brown on the bottom, fold in half and turn off heat. Let sit for one minute, flipping halfway through, and viola! Omelette!' 
    },
    {
      recipe_id: '2', 
      step_number: '1', 
      description: 'Add two pieces of bread to plate, ready your knife' 
    },
    {
      recipe_id: '2',
      step_number: '2', 
      description: 'Spread jeally on first piece of bread, wipe excess jelly on the second slice of bread' 
    },
    {
      recipe_id: '2', 
      step_number: '3', 
      description: 'Spread peanut butter on second slice, add slice one to slice two and viola! PBJ' 
    },
    {
      recipe_id: '3', 
      step_number: '1', 
      description: 'In a hot pan, simmer chopped onions and peppers in butter' 
    },
    {
      recipe_id: '3', 
      step_number: '2', 
      description: 'Add butter to second pan and add tortilla to pan, sprinkling as much cheddar cheese on top as your heart desires' 
    },
    {
      recipe_id: '3', 
      step_number: '3', 
      description: 'Add simmered onions and peppers on tortilla, fold and add weight on top...with whatever you can find. Wait a minute, flip, and reapply pressure. Wait another minute and viola! Quesadilla! Add salsa if desired' 
    },
  ]);
};
