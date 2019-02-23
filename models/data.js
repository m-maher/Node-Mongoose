const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dataSchema = new Schema({
  num: {
    type: Number,
    required: false
  },
  name: {
    type: String,
    required: false
  },
  mail: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('data', dataSchema);