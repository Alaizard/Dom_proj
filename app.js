const express = require('express')
const passport = require('passport')
// const session = require('express-session')
// const auth = require('./backend/config/routes/auth')
const port = process.env.PORT || 5000;
const app = express();
// passport.serializeUser((user, done) => done(null, user));
// passport.deserializeUser((user, done) => done(null, user));


// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());
// require('./backend/config/passport/')(passport)

const server = app.listen(port, () => console.log(`Serve is running on port ${port}`))

app.get("/", (req, res) => {
  res.send("Hello from Team Dominate")
})

// Set up Facebook auth routes


// Launch the server on the port 3000
// const server = app.listen(3000, () => {
//   const { address, port } = server.address();
//   console.log(`Listening at http://${address}:${port}`);
// });

module.exports = app;
// Transform Facebook profile because Facebook and Google profile objects look different
// and we want to transform them into user objects that have the same set of attributes
// const transformFacebookProfile = (profile) => ({
//   name: profile.name,
//   avatar: profile.picture.data.url,
// });

// // Transform Google profile into user object
// const transformGoogleProfile = (profile) => ({
//   name: profile.displayName,
//   avatar: profile.image.url,
// });

// const transformAmazonProfile = (profile) => ({
//     name: profile.displayName,
//     avatar: profile.image.url,
// })