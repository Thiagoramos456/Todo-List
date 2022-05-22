require('dotenv').config();
const mysql = require('mysql2/promise');

const INIT_QUERY = `CREATE DATABASE IF NOT EXISTS MyTodoList;`;

const CREATE_TASKS_QUERY = `CREATE TABLE IF NOT EXISTS tasks ( id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, title VARCHAR(60) NOT NULL, status VARCHAR(10) NOT NULL, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP );`;

let connection;

connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  port: process.env.MYSQL_PORT,
  database: 'MyTodoList',
});

module.exports = connection;
