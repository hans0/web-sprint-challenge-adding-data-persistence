exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    { project_name: 'Week 2 Sprint Challenge', project_description: 'Complete the sprint challenge' },
    { project_name: 'Set up MiSTer FPGA', project_description: 'Configure FPGA board with best games' },
  ]);
};