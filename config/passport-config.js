const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

// Load User model
const User = require('../models/User');


module.exports = function(passport) {
  passport.use(new LocalStrategy({ 
      usernameField: 'login', // We'll use a generic field name 'login' to accept either email or username
      passwordField: 'password'
  }, async (login, password, done) => {
      let user;

      // Try to find user by email
      user = await User.findOne({ email: login });

      // If not found, try to find user by username
      if (!user) {
          user = await User.findOne({ userName: login });
      }

      if (!user) {
          return done(null, false, { message: 'No user with that email or username' });
      }

      // Check password
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
          return done(null, user);
      } else {
          return done(null, false, { message: 'Incorrect password' });
      }
  }));

  passport.serializeUser((user, done) => {
      done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
      const user = await User.findById(id);
      done(null, user);
  });
};

