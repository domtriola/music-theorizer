/* eslint-disable no-console */

const express = require('express');
const path = require('path');

const app = express();

app.use('/dist', express.static(path.join(__dirname, '/../../dist')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(8000, () => {
  console.log('Listening on port 8000');
});
