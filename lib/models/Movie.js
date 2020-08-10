const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  director: {
    type: String, 
    required: true
  },
  year: {
    type: Number, 
    required:true
  },
  review: {
    type: String, 
    required: true
  }
}, {
  toJSON: {
    transform: (doc, ret) => {
      delete ret.__v;
    }
  } 
});

module.exports = mongoose.model('Movie', schema);
