const connection = require('./connection');

async function getAll() {
  const [tasks] = await connection.execute('SELECT * FROM tasks');
  return tasks ? tasks : [];
}


module.exports = {
  getAll,
};