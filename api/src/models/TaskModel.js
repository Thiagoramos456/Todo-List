const connection = require('./connection');

async function getAll() {
  const [tasks] = await connection.execute('SELECT * FROM tasks');
  return tasks ? tasks : [];
}

async function create({ title, description, status }) {
  await connection.execute(
    'INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)',
    [title, description, status],
  );
}

async function edit({ title, description, status, id }) {
  await connection.execute(
    'UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?',
    [title, description, status, id],
  );
}

async function exclude(id) {
  await connection.execute(
    'DELETE FROM tasks WHERE id = ?',
    [id],
  );
}

module.exports = {
  getAll,
  create,
  edit,
  exclude
};
