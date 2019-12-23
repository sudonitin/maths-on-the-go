const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
var random = require('mongoose-simple-random');
const CategoriesSchema = require('../../models/Categories');
CategoriesSchema.plugin(random);
const {levels4} = require('../../connections/connections');
const token = require('../../token/token');


const adddivsubs = levels4.model('adddivsubs',CategoriesSchema);
const dareyou = levels4.model('dareyous',CategoriesSchema);
const muldivsubs = levels4.model('muldivsubs',CategoriesSchema);
const subdivmuls = levels4.model('subdivmuls', CategoriesSchema);
const Game = levels4.model('dk no maths', CategoriesSchema);
const Surprise = levels4.model('surprise', CategoriesSchema);


router.get('/adddivsub',token.auth, (req,res)=> {
    adddivsubs.findRandom({},{},{limit:10},(err,questions) => {
        if(err) throw err;
        var quesMap = {};
        questions.forEach(function(question){
            quesMap[question._id] = question;
        });
        res.send(quesMap);
    })
})

router.get('/dareyou',token.auth, (req,res)=> {
    dareyou.findRandom({},{},{limit:10},(err,questions) => {
        if(err) throw err;
        var quesMap = {};
        questions.forEach(function(question){
            quesMap[question._id] = question;
        });
        res.send(quesMap);
    })
})

router.get('/muldivsub',token.auth, (req,res)=> {
    muldivsubs.findRandom({},{},{limit:10},(err,questions) => {
        if(err) throw err;
        var quesMap = {};
        questions.forEach(function(question){
            quesMap[question._id] = question;
        });
        res.send(quesMap);
    })
})

router.get('/subdivmul',token.auth, (req,res)=> {
    subdivmuls.findRandom({},{},{limit:10},(err,questions) => {
        if(err) throw err;
        var quesMap = {};
        questions.forEach(function(question){
            quesMap[question._id] = question;
        });
        res.send(quesMap);
    })
})

router.get('/dknomath',token.auth, (req,res)=> {
    Game.findRandom({},{},{limit:10},(err,questions) => {
        if(err) throw err;
        var quesMap = {};
        questions.forEach(function(question){
            quesMap[question._id] = question;
        });
        res.send(quesMap);
    })
})

router.get('/surprise',token.auth, (req,res)=> {
    Surprise.findRandom({},{},{limit:10},(err,questions) => {
        if(err) throw err;
        var quesMap = {};
        questions.forEach(function(question){
            quesMap[question._id] = question;
        });
        res.send(quesMap);
    })
})

module.exports = router;