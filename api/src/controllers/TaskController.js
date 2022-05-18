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

  await TaskService.create(task);

  return res.status(201).json({ message: 'Tarefa criada com sucesso' });
}

module.exports = {
  getAll,
};