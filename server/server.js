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
require('dotenv').config();

//Setting up express app
const PORT = process.env.PORT || 5000;

//Initialize the session
app.use(session({
  secret: process.env.SESSIONSECRET,
  saveUninitialized: true,
  resave: true
}))
app.use(passport.initialize());
//Initialize passport
// app.use(passport.initialize());
app.use(passport.session());

//Setting up my strategy
var strategy = new Auth0Strategy({
   domain:       process.env.Auth0Domain,
   clientID:     process.env.Auth0ClientID,
   clientSecret: process.env.Auth0ClientSecret,
   callbackURL:  '/Auth0callback'
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
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

//basic express config
app.use(cors());
app.use(bodyParser.json())


//Massive config
massive(process.env.connectionString).then(dbInstance => app.set('db', dbInstance));
const db = app.get('db');

// Priority serve any static files.
// app.use(express.static(path.resolve(__dirname, '../react-ui/src')));


//Middleware
function sessionChecker(req, res, next) {
  if(!req.session.user) {
    req.session.user = {};
    req.session.isAdmin = false;
  }
  next();
}


// Answer API requests.
app.get('/api', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Hello from the custom server!"}');
});

//Admin Routes
app.get('/api/adminCheck', function (req, res) {
  //Do check against user table for admin
  res.send('You need to login homeslice')
});

app.get('/api/login/local/:username/:password', sessionChecker, function (req, res) {

  var { username, password } = req.params;
  var db = app.get('db');
  //Do check against user table for admin
  db.loginCheck([username, password]).then((dbRes, err) => {
    if(dbRes) {
      //If a user is returned
      if(dbRes.length){
        var {isAdmin, username, password} = dbRes[0];
        req.session.user.username = username;
        req.session.user.password = password;
        req.session.isAdmin = isAdmin ? 1 : 0;
        //res.redirect at this point
        res.send('temp logging in');
      } else {
        res.send('No matching user');
      }
    } else if(err) {
      res.send('there was an error logging in', err);
    }
  })

});

//Admin Db controller routes
app.get('/api/admin/clients', adminDbController.GetAllClients);
app.get('/api/admin/projects', adminDbController.GetAllProjects);
app.get('/api/admin/ahj', adminDbController.GetAllAHJ);


// All remaining requests return the React app, so it can handle routing.
// app.get('*', function(request, response) {
//   response.sendFile(path.resolve(__dirname, '../react-ui/public', 'index.html'));
// });


app.listen(4000, function () {
  console.log(`Listening on port ${PORT}`);
});
