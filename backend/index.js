const dotenv = require('dotenv').config();
const express = require('express')
const router = require("./config/routes/auth")
const passport = require('passport')
const helmet = require("helmet");
const morgan = require("morgan")
const path = require('path')
const app = express();
const { Pool, Client} = require("pg")
app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`))
// passport.serializeUser((user, done) => done(null, user));
// passport.deserializeUser((user, done) => done(null, user));

// Initialize Passport
app.use(helmet());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('tiny'));
}
app.use(passport.initialize());
app.use(passport.session());
app.use("/", router)

const client = new Client({
  username: process.env.DATABASE_USER,
  host: process.env.DATABSE_HOST,
  database: process.env.DATABSE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
  dialect: process.env.DATABASE_DIALECT,
  idleTimeoutMillis: 0,
  connectionTimeoutMillis: 0
})
// require('./backend/config/passport/')(passport)

  
  client.connect((err) => {
    if (err) {
      return console.error('Error acquiring client', err)
    }
    console.log("Connected to the database successfully.")
  })
  
  app.get("/", (req, res) => {
    res.send("Hello from Team Dominate")
  })
  
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