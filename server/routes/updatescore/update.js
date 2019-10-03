const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const token = require('../../token/token');
const {users,levels,tricks} = require('../../connections/connections');


router.post('/upscore', token.auth_user, (req,res)=> {

    users.collection('users').findOneAndUpdate({ email: req.body.email }, {$set:{[req.body.level]:req.body.score}}, {returnOriginal:false}, (err,user) => {
        if(err) return res.json(err);
        else res.json({user});
    });
})

module.exports = router;