const connection = require('./connection');

async function getAll() {
  const [tasks] = await connection.execute('SELECT * FROM tasks');
  return tasks ? tasks : [];
}

async function create({ title }) {
  await connection.execute(
    'INSERT INTO tasks (title) VALUES (?)',
    [title],
  );
}

async function edit({ title, id }) {
  await connection.execute(
    'UPDATE tasks SET title = ? WHERE id = ?',
    [title, id],
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
