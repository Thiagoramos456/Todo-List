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

async function edit({ title, description, id }) {
  await connection.execute(
    'UPDATE tasks SET title = ?, description = ? WHERE id = ?',
    [title, description, id],
  );
}

async function exclude(id) {
  await connection.execute(
    'DELETE FROM tasks WHERE id = ?',
    [id],
  );
}

async function changeStatus({ id, status }) {
  const [results] = await connection.execute(
    'UPDATE tasks SET status = ? WHERE id = ?',
    [status, id],
  );
  return results.affectedRows > 0;
}

module.exports = {
  getAll,
  create,
  edit,
  exclude,
  changeStatus,
};
