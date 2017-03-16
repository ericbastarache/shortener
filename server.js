let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let cookieSession = require('cookie-session');
let cookieParser = require('cookie-parser');

let app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3100, () => {
  console.log('Server started on port 3100');
});
