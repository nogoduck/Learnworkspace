const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 32,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
    required: true,
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: String,
  tokenExp: Number,
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
