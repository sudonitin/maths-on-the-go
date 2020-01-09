const crypto = require('crypto');
const nodemailer = require('nodemailer');
const express = require('express');
const router = express.Router();
const validateForgotInput = require('../../validation/forgot');
const {users} = require('../../connections/connections')


router.post("/check", (req, res) => {
    const { errors, isValid } = validateForgotInput(req.body);// Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const email = req.body.email;
    users.collection('users').findOne({ email }).then(user => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({ email: "Email not found" });
      }// Check password
      else{
         const token = crypto.randomBytes(20).toString('hex');
          // console.log(token);
          users.collection('users').updateMany({email: email}, {$set:{resetToken : token,
            resetTokenTime: (Date.now() + 720000)}}, function(err,user){});
            // console.log("now ",Date.now());
            // console.log("inserted ",(Date.now()+720000));
          
          const s = {
            to_email: email,
            reset_link: 'https://mathstest1.herokuapp.com/reset/'+token //use localhost here
          };
          res.status(200).send(s)
        }
      });
});

module.exports = router;