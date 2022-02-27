const express = require('express');
const serveStactic = require('serve-staic');
const path = require('path');

const app = express();

app.use('/', serveStactic(path.join(__dirname, '/dist')));

const port = process.env.PORT || 8080;

app.listen(port);

console.log('Listening on port :' + port);
