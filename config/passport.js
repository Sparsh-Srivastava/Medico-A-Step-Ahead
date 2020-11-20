const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("users");
const Doc = mongoose.model("docs");
const keys = require("../config/keys");
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;
module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};

module.exports = passport2 => {
  passport2.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      Doc.findById(jwt_payload.id)
        .then(doc => {
          if (doc) {
            return done(null, doc);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};