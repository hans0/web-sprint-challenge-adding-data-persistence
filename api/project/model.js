// build your `Project` model here
const db = require('../../data/dbConfig');

async function getProjects() {
  const projectsQuery = await db('projects as p');
  const result = [];
  projectsQuery.forEach(project => {
    result.push({
      ...project,
      project_completed: project.project_completed === 0 ? false: true,
    })
  });

  return result;
}


module.exports = {
  getProjects,
}