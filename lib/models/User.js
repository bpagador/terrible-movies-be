const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const schema = new mongoose.Schema({
  email: {
    type: String, 
    required: true,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  avatar: String 
}, {
  toJSON: {
    transform: (doc, ret) => {
      delete ret.__v;
      delete ret.passwordHash;
    }
  }
}
);

schema.virtual('password').set(function(textPassword) {
  const passwordHash = bcrypt.hashSync(textPassword, +process.env.SALT_ROUNDS);
  this.passwordHash = passwordHash;
});

schema.statics.authorize = async function(email, password) {
  const user = await this.findOne({ email });
  if(!user) {
    const error = new Error('invalid email or password');
    error.status = 401;
    throw error;
  }
  
  const passwordsMatch = await bcrypt.compare(password, user.passwordHash);
  if(!passwordsMatch) {
    const error = new Error('invalid password');
    error.status = 401;
    throw error;
  }

  return user;
};

module.exports = mongoose.model('User', schema);
