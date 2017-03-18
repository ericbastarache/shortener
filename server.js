let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let path = require('path');
let routes = require('./routes/routes');
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/urls');

let db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/urls', routes);

app.listen(3100, () => {
  console.log('Server started on port 3100');
});
