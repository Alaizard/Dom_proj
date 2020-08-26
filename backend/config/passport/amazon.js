const { amazon } = require('./oauth')
const passport = require('passport')
const AmazonStrategy = require('passport-amazon').Strategy
// console.log(passport)

passport.use(new AmazonStrategy(amazon,
    // Gets called when user authorizes access to their profile
    function(accessToken, refreshToken, profile, done){
        User.findOrCreate({ amazonId: profile.id }, (err, user) => {
            return done(err, user);
        })
    })
)

module.exports = passport