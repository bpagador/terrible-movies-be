const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  email: {
    type: String, 
    required: true
  },
  passwordHash: {
    type: String,
    required: true
  } 
}, {
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      delete ret.id;
      delete ret.__v;
    }
  }
}
);

module.exports = mongoose.model('User', schema);
