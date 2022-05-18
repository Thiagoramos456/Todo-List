const TaskModel = require('../models/TaskModel');

async function getAll() {
  const tasks = await TaskModel.getAll();

  if (tasks.length === 0) {
    return {
      error: 'Nenhuma task encontrada',
      status: 404,
    };
  }

  return tasks;
}

async function create(task) {
  // await TaskModel.create(task);

  return {
    message: 'Tarefa criada com sucesso',
    status: 201,
  };
}

module.exports = {
  getAll,
  create,
};