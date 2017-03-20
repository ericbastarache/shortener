let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let CounterSchema = Schema({
  _id: {
    type: String,
    required: true
  },
  seq: {
    type: Number,
    default: 0
  }
});

let counter = mongoose.model('Counter', CounterSchema);

let UrlSchema = new Schema({
  _id: {
    type: Number,
    index: true
  },
  long_url: String,
  created_at: Date
});

module.exports = mongoose.model('Url', UrlSchema);
