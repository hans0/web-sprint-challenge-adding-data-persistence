exports.seed = function(knex, Promise){
  return knex('resources').insert([
    { 
      resource_name: 'Past projects', 
      resource_description: 'Knowledge/project structure to be gleamed from wonderful projects designed by Lambda School' 
    },
    {
      resource_name: 'Coding playlist',
      resource_description: 'Anything to get that earworm out of my head'
    }
  ])
}