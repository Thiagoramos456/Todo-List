require('dotenv').config();

const PORT = process.env.PORT || 3001;
const express = require('express');

const app = express();

app.listen(PORT, () => {
  console.log(`API rodando na porta: ${PORT}`);
});