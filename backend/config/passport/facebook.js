const { facebook } = require('./oauth')
const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
// console.log(passport)

    passport.use(new FacebookStrategy(facebook,
        // Gets called when user authorizes access to their profile
        function(accessToken, refreshToken, profile, done){
            User.findOrCreate({ facebookId: profile.id }, (err, user) => {
                return done(err, user);
            })
        })
    )

module.exports = passport;