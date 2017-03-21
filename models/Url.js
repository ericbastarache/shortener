const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CounterSchema = Schema({
    _id: {type: String, required: true},
    seq: { type: Number, default: 0 }
});

let counter = mongoose.model('counter', CounterSchema);

// create a schema for our links
let urlSchema = new Schema({
  longId: {type: Number, index: true},
  long_url: String,
  created_at: Date
});

urlSchema.pre('save', (next) => {
  var doc = this;
  counter.findByIdAndUpdate({_id: 'url_count'}, {$inc: {seq: 1} }, {new: true, upsert: true }, (error, counter) => {
    if(error)
      return next(error);
    doc.longId = counter.seq;
    doc.created_at = new Date();
    next();
    
  });
});

let Url = mongoose.model('Url', urlSchema);

module.exports = Url;
