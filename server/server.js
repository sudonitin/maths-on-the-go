const express = require('express')
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require("body-parser");
const users = require('./routes/api/users');
const passport = require("passport");
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
app.use(passport.initialize());
  
// Passport config
require("./config/passport")(passport);


const db = require("./config/key").mongoURI;
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

app.use(function (req, res, next) {
  console.log(req.body) // populated!
  next()
})


app.use('/api',users);
app.get('/hello',function(req,res){
  return res.send('Hello world');
});

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
