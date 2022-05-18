const connection = require('./connection');

export async function getAll() {
  const [tasks] = await connection.execute('SELECT * FROM tasks');
  return tasks;
}
