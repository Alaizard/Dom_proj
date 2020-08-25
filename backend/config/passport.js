const { facebook, amazon, google } = require('./config')
const passport = require('passport')
const FacebookStrategy = require('passport-facebook')
const GoogleStrategy = require('passport-google-oauth20')
const AmazonStrategy = require('passport-amazon')

passport.use(new FacebookStrategy(facebook,
    // Gets called when user authorizes access to their profile
    function(accessToken, refreshToken, profile, done){
        User.findOrCreate({ facebookId: profile.id }, (err, user) => {
            return done(err, user);
        })
    })
)
     
// Register Google Passport strategy
passport.use(new GoogleStrategy(google,
function (accessToken, refreshToken, profile, done) {
    User.findOrCreate({ googleId: profile.id }, (err, user) => {
        return done(err, user);
    })   
}
));
// Register Amazon Passport strategy
passport.use(new AmazonStrategy(amazon,
    // Gets called when user authorizes access to their profile
    function(accessToken, refreshToken, profile, done){
        User.findOrCreate({ amazonId: profile.id }, (err, user) => {
            return done(err, user);
        })
    })
)