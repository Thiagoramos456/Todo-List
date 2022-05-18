const connection = require('./connection');

async function getAll() {
  const [tasks] = await connection.execute('SELECT * FROM tasks');
  return tasks ? tasks : [];
}

async function create({ title, description, status }) {
  await connection.execute(
    'INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)',
    [title, description, status]
  );
}

module.exports = {
  getAll,
  create,
};
