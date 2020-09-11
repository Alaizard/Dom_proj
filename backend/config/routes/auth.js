const express = require('express');
const router = express.Router();
const passport = require('passport')
const passportFacebook = require('../passport/facebook');
const passportGoogle = require('../passport/google');
const passportAmazon = require('../passport/amazon');
const crypto = require('crypto')
const jwt = require('jsonwebtoken')


//  Set up Facebook auth routes
router.get('/auth/facebook', passportFacebook.authenticate('facebook'));

router.get('/auth/facebook/callback',
passport.authenticate('facebook', { failureRedirect: '/login' }),
(req, res) => res.redirect('/'));

// Set up Google auth routes
router.get('/auth/google', passportGoogle.authenticate('google', { scope: ['profile'] }));

router.get('/auth/google/callback',
passport.authenticate('google', { failureRedirect: '/login' }),
(req, res) => res.redirect('/'));

// Set up Amazon auth routes
router.get('/auth/amazon', passportAmazon.authenticate('amazon'));

router.get('/auth/amazon/callback',
passport.authenticate('amazon', { failureRedirect: '/login' }),
(req, res) => res.redirect('/'));

router.post('/signup', (req, res) => {
    User.findOne(req.body.email).then((user) => {
        if (user) {
            throw("That email already exists")
        }
    })

    if (req.err) {
        throw(error)
    } else {
        let newUser = new User({
            email: req.body.email,
            name: req.body.name,
            password: req.body.password

        })
    }
    // jwt.sign
})

module.exports = router;