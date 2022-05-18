const TaskService = require('../services/TaskService');

async function getAll(_req, res) {
  const tasks = await TaskService.getAll();

  if (tasks.error) {
    return res.status(tasks.status).json({ error: tasks.error });
  }

  return res.status(200).json(tasks);
}

async function create(req, res) {
  const task = req.body;

  const response = await TaskService.create(task);

  return res.status(response.status).json({ message: response.message });
}

async function edit(req, res) {
  const task = req.body;
  
  const response = await TaskService.edit(task);

  return res.status(response.status).json({ message: response.message });
}

async function exclude(req, res) {
  const { id } = req.params;
  
  const response = await TaskService.exclude(id);

  return res.status(response.status).json({ message: response.message });
}

module.exports = {
  getAll,
  create,
  edit,
  exclude,
};