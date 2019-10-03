const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const TricksSchema = require('../../models/Tricks');
const {users,levels, tricks} = require('../../connections/connections');
const token = require('../../token/token');


const trick = tricks.model('tricks',TricksSchema);


router.get('/trick',token.auth,(req,res)=> {
    
    trick.find({},(err,questions) => {
        //console.log("inside tricks");
        //console.log(questions);
        if(err) throw err;
        var quesMap = {};
        questions.forEach(function(matrick){
            quesMap[matrick._id] = matrick;
        });
        res.send(quesMap);
    })
})


module.exports = router;