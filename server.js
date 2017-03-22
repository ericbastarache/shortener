let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let path = require('path');
let routes = require('./routes/routes');
let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/urls');
let port = process.env.PORT || 3100;

let db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
