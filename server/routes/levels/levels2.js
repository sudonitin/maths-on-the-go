const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
var random = require('mongoose-simple-random');
const CategoriesSchema = require('../../models/Categories');
CategoriesSchema.plugin(random);
const {levels2} = require('../../connections/connections');
const token = require('../../token/token');


const Addmods = levels2.model('addmods',CategoriesSchema);
const Addmuls = levels2.model('addmuls',CategoriesSchema);
const Addsubs = levels2.model('addsubs',CategoriesSchema);


router.get('/addmod',token.auth, (req,res)=> {
    Addmods.findRandom({},{},{limit:10},(err,questions) => {
        if(err) throw err;
        var quesMap = {};
        questions.forEach(function(question){
            quesMap[question._id] = question;
        });
        res.send(quesMap);
    })
})

router.get('/addmul',token.auth, (req,res)=> {
    Addmuls.findRandom({},{},{limit:10},(err,questions) => {
        if(err) throw err;
        var quesMap = {};
        questions.forEach(function(question){
            quesMap[question._id] = question;
        });
        res.send(quesMap);
    })
})

router.get('/addsub',token.auth, (req,res)=> {
    Addsubs.findRandom({},{},{limit:10},(err,questions) => {
        if(err) throw err;
        var quesMap = {};
        questions.forEach(function(question){
            quesMap[question._id] = question;
        });
        res.send(quesMap);
    })
})

module.exports = router;