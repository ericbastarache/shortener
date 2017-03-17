let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let Url = new Schema({
  _id: Schema.ObjectId,
  urls: String,
  token: String
});

module.exports = mongoose.model('Url', Url);
