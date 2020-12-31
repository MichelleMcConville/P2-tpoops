let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let db = require('../models');

passport.use(
  new LocalStrategy({ usernameField: 'email' },(email, password, done) => {
    db.User.findOne({ where: { email }
    }).then(dbUser => {
      return !dbUser || !dbUser.validPassword(password) ? done(null, false, { message: 'Incorrect email or password.' }) : done(null, dbUser);
    });
  })
);

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

module.exports = passport;
