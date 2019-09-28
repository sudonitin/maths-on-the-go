const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');//hashing the pasword before storing it to the database
const jwt = require('jsonwebtoken');
const keys = require('../../config/key');

const validateRegisterInput = require('../../validation/register')
const validateLoginInput = require('../../validation/login');

const User = require('../../models/User')

//Pull the errors and isValid variables from our validateRegisterInput(req.body) function and check input validation

router.post('/register',(req,res) => {
    
    //form validation
    const {errors,isValid} = validateRegisterInput(req.body);//calls the function and destructures it into the following parameters
    if(!isValid){
        return res.status(400).json(errors);
    }
    User.findOne({email:req.body.email}).then(user => {
        if(user){
            return res.status(400).json({email:'Email already exists'})
        }
        else{
            const newUser = new User({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password
            });
            //console.log(newUser);
            bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser
                  .save()
                  .then(user => {
                    const payload = {
                      id:user.id,
                      name:user.name
                    };
                    jwt.sign(payload,
                      keys.secretOrKey,
                      {
                      expiresIn: '48h',
                      algorithm:'HS384' // 1 year in seconds
                      },
                      (err,token) => {
                        if(err) return res.json(err);
                        else {
                          res.json({
                            user,
                            token:"Bearer "+token
                          })
                        }
                      }
                    )
                  })
                  .catch(err => console.log(err));
              });
            });
        }
    })
})

router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);// Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }const email = req.body.email;
    const password = req.body.password;// Find user by email
    User.findOne({ email }).then(user => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({ emailnotfound: "Email not found" });
      }// Check password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: user.id,
            name: user.name
          };// Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: '48h',
              algorithm:'HS384' // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                user,
                token: "Bearer " + token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
  });

module.exports = router;