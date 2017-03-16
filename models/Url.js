let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:3317/urls');

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));

let Url = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  link: String,
  token: String
});

module.exports = mongoose.model('Url', Url);
