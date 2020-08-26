const { google } = require('./oauth')
const passport = require("passport")
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy

passport.use(new GoogleStrategy(google,
    function (accessToken, refreshToken, profile, done) {
        User.findOrCreate({ googleId: profile.id }, (err, user) => {
            return done(err, user);
        })   
    }
));

module.exports = passport