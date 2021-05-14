
exports.up = async function(knex) {
  await knex.schema
    .createTable('projects', table => {
      table.increments('project_id')
      table.string('project_name', 127).notNullable()
      table.string('project_description')
      table.boolean('project_completed').defaultTo(0)
    })
    .createTable('resources', table => {
      table.increments('resource_id')
      table.string('resource_name').notNullable().unique()
      table.string('resource_description')
    })
    .createTable('tasks', table => {
      table.increments('task_id')
      table.string('task_description').notNullable()
      table.string('task_notes')
      table.boolean('task_completed').defaultTo(0)
      table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('CASCADE')
    })
    .createTable('project_resources', table => {
      table.integer('project_id')
        .references('project_id')
        .inTable('projects')
        .onDelete('CASCADE');
      table.integer('resource_id')
        .references('resource_id')
        .inTable('resources')
        .onDelete('CASCADE');
    })
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
