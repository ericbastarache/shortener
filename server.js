let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');

let app = express();

app.use(bodyParser.urlEncoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3100, () => {
  console.log('Server started on port 3100');
});
