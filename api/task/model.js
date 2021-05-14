// build your `Task` model here
const db = require('../../data/dbConfig');

/**
 * 
    Even though task_completed is stored as an integer, the API uses booleans when interacting with the client
    Each task must include project_name and project_description
 * 
 * @returns table of task objects
 * [
 *  { 
 *    "task_id":1,
 *    "task_description":"baz",
 *    "task_notes":null,
 *    "task_completed":false,
 *    "project_name:"bar",
 *    "project_description":null
 *  }
 * ]
 */
async function getTasks() {
  const tasksQuery = await db('tasks as t')
    .leftJoin('projects as p', 't.project_id', 'p.project_id')
    .select(
      't.task_id',
      't.task_description',
      't.task_notes',
      't.task_completed',
      'p.project_name',
      'p.project_description'
    );
    const result = [];
    tasksQuery.forEach(task => {
      result.push({
        ...task,
        // task_id: task.task_id,
        // task_description: task.task_description,
        // task_notes: task.task_notes,
        task_completed: task.task_completed === 0 ? false : true,
        // project_name: task.project_name,
        // project_description: task.project_description,
      });
    });
  return result;
}



module.exports = {
  getTasks,
}