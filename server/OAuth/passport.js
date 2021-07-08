const mongoose = require('mongoose');
const passport = require('passport');
require('dotenv').config();
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const Users = require('../../server/database/schema.js');

const callbackURI = process.env.CALLBACK_URI || '';
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: callbackURI + '/auth/google/callback',
},
(accessToken, refreshToken, profile, done) => {
  done(null, profile);
}
));

module.exports = {
  GoogleStrategy,
};