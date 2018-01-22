const express = require('express');
const path = require('path');
const massive = require('massive');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');

require('dotenv').config();

//Setting up express app
const app = express();
const PORT = process.env.PORT || 5000;

//Initialize the session
app.use(session({
  secret: process.env.SESSIONSECRET,
  saveUninitialized: true,
  resave: true
}))
//Initialize passport
app.use(passport.initialize());
app.use(passport.session());

//basic express config
app.use(cors());
app.use(bodyParser.json())


//Massive config
const connectionString = process.env.connectionString;
const massiveInstance = massive.connectSync({connectionString});
app.set('db', massiveInstance);
const db = app.get('db');

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

// Answer API requests.
app.get('/api', function (req, res) {
  res.set('Content-Type', 'application/json');
  res.send('{"message":"Hello from the custom server!"}');
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
