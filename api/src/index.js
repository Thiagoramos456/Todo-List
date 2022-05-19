require('dotenv').config();


const TaskRouter = require('./routers/TaskRouter');
const PORT = process.env.PORT || 3001;
const express = require('express');

const app = express();

app.use(express.json());

app.use('/tasks', TaskRouter)

app.listen(PORT, () => {
  console.log(`API rodando na porta: ${PORT}`);
});

module.exports = app;