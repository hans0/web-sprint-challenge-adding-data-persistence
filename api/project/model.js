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

async function getProjectById(p_id){
  const projectQuery = await db('projects as p')
    .where('project_id', p_id).first();
  const result = {
    ...projectQuery,
    project_completed: projectQuery.project_completed === 0 ? false: true,
  };
  return result;
}

async function addProject(project){
  const returnedProjectId = await db('projects').insert(project)

  return getProjectById(returnedProjectId);
}




module.exports = {
  getProjects,
  getProjectById,
  addProject,
}