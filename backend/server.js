const express = require('express');
const server = express();
const port = 8080;

server.get('/', (req, res) => {
  res.send('Test');
})

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})