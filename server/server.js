const express = require('express')
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require("body-parser");
const users = require('./routes/api/users');
const passport = require("passport");
const logger = require('morgan');
const app = express()
const port = process.env.PORT || 5000;// process.env.port is Heroku's port if you choose to deploy the app there

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());// DB Config
app.use(cors());

// Passport middleware
//app.use(passport.initialize());
  
// Passport config
//require("./config/passport")(passport);

app.use(logger('dev'));
const db = require("./config/key").mongoUsersURI;

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

app.use('/api',users);
const level1 = require('./routes/levels/levels1');
app.use('/level1',level1);
const update = require('./routes/updatescore/update');
app.use('/update',update);
const tricks = require('./routes/tricks/mathtricks');
app.use('/tricks',tricks);
//console.log("outside tricks");
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
