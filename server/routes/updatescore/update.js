const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const token = require('../../token/token');
const User = require('../../models/User');
const {users,levels} = require('../../connections/connections');


router.post('/upscore', token.auth, (req,res)=> {

    users.collection('users').findOneAndUpdate({ email: req.body.email }, {$set:{[req.body.level]:req.body.score}}, {returnOriginal:false}, (err,user) => {
        if(err) return res.json(err);
        else res.json({user});
    });
})

module.exports = router;