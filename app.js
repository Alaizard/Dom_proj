const express = require('express')
const passport = require('passport')
const port = process.env.PORT || 5000;
const app = express();
const server = app.listen(port, () => console.log(`Serve is running on port ${port}`))
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));


// Initialize Passport
app.use(passport.initialize());
// require("./backend/config/passport")(passport)
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("Hello from Team Dominate")
})

// Set up Facebook auth routes
app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
passport.authenticate('facebook', { failureRedirect: '/auth/facebook' }),
// Redirect user back to the mobile app using Linking with a custom protocol OAuthLogin
(req, res) => res.redirect('OAuthLogin://login?user=' + JSON.stringify(req.user)));

// Set up Google auth routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback',
passport.authenticate('google', { failureRedirect: '/auth/google' }),
(req, res) => res.redirect('OAuthLogin://login?user=' + JSON.stringify(req.user)));

// Set up Amazon auth routes
app.get('/auth/amazon', passport.authenticate('amazon'));

app.get('/auth/amazon/callback',
passport.authenticate('amazon', { failureRedirect: '/auth/amazon' }),
(req, res) => res.redirect('OAuthLogin://login?user=' + JSON.stringify(req.user)));

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