const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true
  },
  da1: {
    type: String,
    required: true
  },
  task: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
 
  

});
const datasss = mongoose.model('datasss', dataSchema);

module.exports = datasss;