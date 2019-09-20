const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();// Bodyparser middleware
const passport = require("passport");
const users = require('./routes/api/users');
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());// DB Config
app.use(cors);
const db = require("./config/key").mongoURI;
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there

// Passport middleware
app.use(passport.initialize());
  
// Passport config
require("./config/passport")(passport);

app.use('/api',users);
app.listen(port, () => console.log(`Server up and running on port ${port} !`));


