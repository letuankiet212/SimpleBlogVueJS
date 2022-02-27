const express = require('express');
const serveStactic = require('serve-staic');
const path = require('path');

const app = express();

app.use('/', serveStactic(path.join(__dirname, '/dist')));

app.get(/.*/, function (req, res) {
  res.sendFile(path.join(_dirname, '/dist/index.html'));
});

const port = process.env.PORT || 8080;

app.listen(port);
