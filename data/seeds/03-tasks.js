exports.seed = function(knex, Promise){
  return knex('tasks').insert([
    { 
      task_description: 'Start with functional endpoints',
      project_id: 1,
    }
  ])
}