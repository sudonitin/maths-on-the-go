const crypto = require('crypto');
const nodemailer = require('nodemailer');
const express = require('express');
const router = express.Router();
const validateForgotInput = require('../../validation/forgot');
const {users,levels} = require('../../connections/connections')


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
          console.log(token);
          users.collection('users').updateMany({email: email}, {$set:{resetToken : token,
            resetTokenTime: Date.now() + 360000}}, function(err,user){});

          const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: `geminiautomobilesnerul@gmail.com`,
              pass: `i like it`,
            },
          });

          const mailOptions = {
            from : 'Maths On the go',
            to: `${email}`,
            subject: `Reset Password link`,
            text: `Use the below link to change your password\n` + `http://localhost:3000/reset/${token}\n\n` + `NOTE: This link expire in an hour`
          };

          transporter.sendMail(mailOptions, function(err, response) {
            if (err){
              console.error('there was an error ', err);
            }
            else{
              console.log('the response is ', response);
              res.status(200).json('recover mail sent');
            }
          })
        }
      });
});

module.exports = router;