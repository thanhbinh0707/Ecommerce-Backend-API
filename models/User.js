const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const moment = require('moment');

const userSchema = new mongoose.Schema({
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: String,
    gender: String,
    email: { type: String, unique: true, required: true },
    profilePic: String,
    dayOfBirth: Date,
    googleAuth: String,
    facebookAuth: String,
    role: { type: String, enum: ['employee', 'admin', 'owner'], required: true },
    isVerified: { type: Boolean, default: false },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
});

// Encrypt password before saving
userSchema.pre('save', function (next) {
    if (this.dayOfBirth) {
      this.dayOfBirth = moment(this.dayOfBirth).format('MM-DD-YYYY');
    }
    next();
  });
module.exports = mongoose.model('User', userSchema);
