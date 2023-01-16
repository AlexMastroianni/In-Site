const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlenght: 5,
  },
  username: {
    type: String,
    trim: true,
  },
  company: {
    type: String,
  },
  trade: {
    type: String,
    enum: [
      'Architect',
      'Builder',
      'Plumber',
      'Electrian',
      'Carpenter',
      'Painter',
      'Plasterer',
    ],
  },
  sites: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Site',
    },
  ],
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
