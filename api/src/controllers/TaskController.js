const TaskService = require('../services/TaskService');

async function getAll() {
  const tasks = await TaskService.getAll();
  return tasks;
}

module.exports = {
  getAll,
};