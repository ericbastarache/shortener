let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let path = require('path');
let routes = require('./routes/routes');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/urls', routes);

app.listen(3100, () => {
  console.log('Server started on port 3100');
});
