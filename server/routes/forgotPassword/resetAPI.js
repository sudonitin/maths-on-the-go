const express = require('express');
const router = express.Router();
const validateResetInput = require('../../validation/reset');
const bcrypt = require('bcryptjs');
const User = require('../../models/User')
const {users,levels} = require('../../connections/connections')

//Pull the errors and isValid variables from our validateResetInput(req.body) function and check input validation

router.put("/change",(req,res) => {
    const password = req.body.password;
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) throw err;
          users.collection('users').findOneAndUpdate({email:req.body.email}, {$set:{password: hash, resetToken:null,resetTokenTime:null}}, {returnOriginal:false}, (err,user) => {
            if(err) return res.json(err);
            else {
                res.status(200).send({
                    message: "updated",
                });
            };
                });
            });
        });
    });
    

module.exports = router;