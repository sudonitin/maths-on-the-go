const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
var random = require('mongoose-simple-random');
const TricksSchema = require('../../models/Tricks');
TricksSchema.plugin(random);
const {users,levels, tricks} = require('../../connections/connections');
const token = require('../../token/token');


const trick = tricks.model('tricks',TricksSchema);


router.get('/trick',token.auth, (req,res)=> {
    console.log("inside tricks");
    trick.findRandom({},{},{limit:1},(err,questions) => {
        if(err) throw err;
        var quesMap = {};
        questions.forEach(function(question){
            quesMap[question._id] = question;
        });
        res.send(quesMap);
    })
})


module.exports = router;