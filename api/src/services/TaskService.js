const TaskModel = require('../models/TaskModel');

export default async function getAll() {
  const tasks = await TaskModel.getAll();
  return tasks;
}
