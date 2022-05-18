const TaskModel = require('../models/TaskModel');

async function getAll() {
  const tasks = await TaskModel.getAll();
  return tasks;
}

module.exports = {
  getAll,
};