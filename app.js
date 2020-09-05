require('dotenv').config();
const express = require('express')
const router = require("./backend/config/routes/auth")
const passport = require('passport')
const helmet = require("helmet");
const morgan = require("morgan")
const path = require('path')
const app = express();
const { Pool, Client} = require("pg")
// passport.serializeUser((user, done) => done(null, user));
// passport.deserializeUser((user, done) => done(null, user));
console.log(process.env.DATABASE_NAME)
// console.log(process.env)

// Initialize Passport
app.use(helmet);
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('tiny'));
}
app.use(passport.initialize());
app.use(passport.session());
// require('./backend/config/passport/')(passport)

const db = new Client({
  user: process.env.DATABSE_USER,
  host: process.env.DATABSE_HOST,
  database: process.env.DATABSE_NAME,
  password: process.env.DATABSE_PASSWORD,
  port: process.env.PORT
})

// const db = new Pool({
//   user: process.env.DATABSE_USER,
//   host: process.env.DATABSE_HOST,
//   database: process.env.DATABSE_NAME,
//   password: process.env.DATABSE_PASSWORD,
//   port: process.env.PORT
// })

db.connect((err) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
  console.log("Connected to the database successfully.")
})

app.use("/", router)

const server = app.listen(process.env.PORT, () => console.log(`Serve is running on port ${process.env.PORT}`))

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