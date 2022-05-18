const connection = require('./connection');

async function getAll() {
  const [tasks] = await connection.execute('SELECT * FROM tasks');
  return tasks ? tasks : [];
}

async function create() {
  const [task] = await connection.execute('INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)', ['Task 1', 'Task 1 description']);
  return task;
}

module.exports = {
  getAll,
  create,
};