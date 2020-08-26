var express = require('express');
var router = express.Router();
var passport = require('passport')
var passportFacebook = require('../passport/facebook');
var passportGoogle = require('../passport/google');
var passportAmazon = require('../passport/amazon');

router.get('/auth/facebook', passportFacebook.authenticate('facebook'));

router.get('/auth/facebook/callback',
passport.authenticate('facebook', { failureRedirect: '/login' }),
// Redirect user back to the mobile router using Linking with a custom protocol OAuthLogin
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

module.exports = router;