// build your `Resource` model here
const db = require('../../data/dbConfig.js');

function getResources() {
  return db('resources');
}

function getResourceById(r_id) {
  return db('resources').where('resource_id', r_id).first();
}

async function addResource(resource) {
  const insertedResourceId = await db('resources')
    .insert(resource);
  return getResourceById(insertedResourceId);
}

module.exports = {
  getResources,
  addResource,
}