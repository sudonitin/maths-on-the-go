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
          res.send("found ur email");
      }
    });
  });

module.exports = router;