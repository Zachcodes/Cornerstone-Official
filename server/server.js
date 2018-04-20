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
const bcrypt = require('bcryptjs');
require('dotenv').config();

//Setting up express app
const PORT = process.env.PORT || 3200;

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

passport.use(
  new Auth0Strategy(
    {
      domain: process.env.AUTH_DOMAIN,
      clientID: process.env.AUTH_CLIENT_ID,
      clientSecret: process.env.AUTH_CLIENT_SECRET,
      callbackURL: process.env.AUTH_CALLBACK,
      scope: 'openid profile email'
    },
    (accessToken, refreshToken, extraParams, profile, done) => {
      const db = app.get("db");
      db.get_user_by_auth_id({ auth_id: profile.id }).then(results => {
        let user = results[0];

        if (user) {
          return done(null, user);
        } else {
          let userObj = {
            username: profile.displayName,
            auth_id: profile.id
          };

          db.create_user(userObj).then(results => {
            let user = results[0];
            return done(null, user);
          });
        }
      });

    }
  )
);

passport.serializeUser((user, done) => {
  return done(null, user.user_id);
});

passport.deserializeUser((id, done) => {
  const db = app.get("db");
  db.get_user_by_id({ id }).then(results => {
    let user = results[0];
    return done(null, user);
  });
});

app.get("/auth", passport.authenticate("auth0"));
app.get(
  "/auth/callback",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/#/locations",
    failureRedirect: "http://localhost:3000/#/login"
  })
);

// Priority serve any static files.
// app.use(express.static(path.resolve(__dirname, '../react-ui/src')));

//Admin Db controller routes
app.get('/api/admin/clients', adminDbController.GetAllClients);
app.get('/api/admin/projects', adminDbController.GetAllProjects);
app.get('/api/admin/ahj', adminDbController.GetAllAHJ);

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
