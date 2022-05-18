const TaskService = require('../services/TaskService');

async function getAll(_req, res) {
  const tasks = await TaskService.getAll();
  return res.status(200).json(tasks);
}

module.exports = {
  getAll,
};