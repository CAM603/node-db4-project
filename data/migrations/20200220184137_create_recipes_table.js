
exports.up = function(knex) {
    return knex.schema
        .createTable('recipes', table => {
            table.increments()

            table.string('recipe_name', 225)
                .notNullable()
        })
        .createTable('steps', table => {
            table.increments()

            table.integer('step_number')
                .notNullable()
            
            table.text('description')
                .notNullable()

                // Foreign key
            table.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        })
        .createTable('ingredients', table => {
            table.increments()

            table.string('ingredient_name', 225)
                .notNullable()
                .unique()
        })
        .createTable('recipe_ingredients', table => {
            table.primary(['recipe_id', 'ingredient_id'])

            table.string('amount', 225)

            table.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
            table.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('ingredients')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        })
};

exports.down = function(knex) {

    return knex.schema
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('recipes');
};
