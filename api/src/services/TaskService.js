const TaskModel = require('../models/TaskModel');

export default function getAll() {
  const tasks = TaskModel.getAll();
  return tasks;
}
