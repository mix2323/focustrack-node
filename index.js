const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('FocusTrackMix2323 - Pomodoro em Node.js!');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
