const express = require('express');
const app = module.exports = express();
const path = require('path');
const massive = require('massive');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const adminDbController = require('./Controllers/adminDbController.js');
const bcrypt = require('bcrypt');
require('dotenv').config();

//Setting up express app
const PORT = process.env.PORT || 5000;

//basic express config
app.use(cors());
app.use(bodyParser.json());

//Initialize the session
app.use(session({
  secret: process.env.SESSIONSECRET,
  saveUninitialized: true,
  resave: true
}))

massive(process.env.connectionString).then(dbInstance => app.set('db', dbInstance));

app.use(passport.initialize());
app.use(passport.session());

//Setting up my strategy
var strategy = new Auth0Strategy({
   domain:       process.env.Auth0Domain,
   clientID:     process.env.Auth0ClientID,
   clientSecret: process.env.Auth0ClientSecret,
   callbackURL:  '/Auth0callback'
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    return done(null, profile);
  }
);

passport.use(strategy);

//Passport routes
app.get('/callback',
  passport.authenticate('auth0', { failureRedirect: '/login' }),
  function(req, res) {
    if (!req.user) {
      throw new Error('user null');
    }
    res.redirect("/");
  }
);

app.get('/login',
  passport.authenticate('auth0', {}), function (req, res) {
  res.redirect("/");
});

//Deserialize and serialize the user on session
passport.serializeUser(function(user, done) {
  done(null, user)
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

// Priority serve any static files.
// app.use(express.static(path.resolve(__dirname, '../react-ui/src')));

//Admin Db controller routes
app.get('/api/admin/clients', adminDbController.GetAllClients);
app.get('/api/admin/projects', adminDbController.GetAllProjects);
app.get('/api/admin/ahj', adminDbController.GetAllAHJ);

app.listen(4000, function () {
  console.log(`Listening on port ${PORT}`);
});
