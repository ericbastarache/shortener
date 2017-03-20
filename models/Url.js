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

UrlSchema.pre('save', (next) => {
  let doc = this;
  counter.findByIdAndUpdate({_id: 'url_count'}, {$inc: {seq: 1} }, (error, counter) => {
    if(error) {
      return next(error);
    } else {
      doc.created_at = new Date();
      doc._id = counter.seq;
      next();
    }
  });
});

module.exports = mongoose.model('Url', UrlSchema);
