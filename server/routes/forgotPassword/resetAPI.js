const express = require('express');
const router = express.Router();
const validateResetInput = require('../../validation/reset');
const bcrypt = require('bcryptjs');
const User = require('../../models/User')
const {users,levels} = require('../../connections/connections')

//Pull the errors and isValid variables from our validateResetInput(req.body) function and check input validation

router.post("/change",(req,res) => {
    const {errors,isValid} = validateResetInput(req.body);//calls the function and destructures it into the following parameters
    if(!isValid){
        return res.status(400).json(errors);
    }
    const change = {password: req.body.password};
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(change.password, salt, (err, hash) => {
          if (err) throw err;
          change.password = hash;
          users.collection('users').findOneAndUpdate({email:req.body.email}, {$set:{password: change.password}}, {returnOriginal:false}, (err,user) => {
            if(err) return res.json(err);
            else res.json({user});
                });
            });
        });
    });
    

module.exports = router;