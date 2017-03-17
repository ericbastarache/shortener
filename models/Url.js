let mongoose = require('mongoose');

let Url = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  urls: String,
  token: String
});

module.exports = mongoose.model('Url', Url);
