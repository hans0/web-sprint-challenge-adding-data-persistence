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
        task_completed: task.task_completed === 0 ? false : true,
      });
    });
  return result;
}

async function getTaskById(task_id) {
  const taskQuery = await db('tasks as t').where('task_id', task_id).first();
  return {
    ...taskQuery,
    task_completed: taskQuery.task_completed === 0 ? false: true
  };
}

async function addTask(task) {
  const newTaskId = await db('tasks as t').insert(task);
  return getTaskById(newTaskId);
}



module.exports = {
  getTasks,
  addTask,
}