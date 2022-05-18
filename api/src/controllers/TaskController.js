const TaskService = require('../services/TaskService');

export async function getAll() {
  const tasks = await TaskService.getAll();
  return tasks;
}