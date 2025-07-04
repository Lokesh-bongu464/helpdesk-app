const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  resetOTP: String,
  otpExpiry: Date,
});

module.exports = mongoose.model("User", userSchema);
