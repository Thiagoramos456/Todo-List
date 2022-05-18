const TaskService = require('../services/TaskService');

async function getAll(_req, res) {
  const tasks = await TaskService.getAll();

  if (tasks.error) {
    return res.status(tasks.status).json({ error: tasks.error });
  }

  return res.status(200).json(tasks);
}

module.exports = {
  getAll,
};