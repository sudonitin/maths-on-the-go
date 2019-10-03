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
    
    trick.findRandom({},{},{limit:1},(err,questions) => {
        console.log("inside tricks");
        // if(err) throw err;
        var quesMap = {};
        questions.forEach(function(matrick){
            quesMap[matrick._id] = matrick;
        });
        res.send(quesMap);
    })
})


module.exports = router;