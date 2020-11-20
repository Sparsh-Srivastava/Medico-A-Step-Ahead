const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = require('./config/keys.js');
const passport = require("passport");

const users = require("./routes/api/users");

const app = express();
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("", users);

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Herbie is fully loaded on port ${port} !`));
