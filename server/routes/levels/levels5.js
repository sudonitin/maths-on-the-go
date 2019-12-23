const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
var random = require('mongoose-simple-random');
const CategoriesSchema = require('../../models/Categories');
CategoriesSchema.plugin(random);
const {levels3} = require('../../connections/connections');
const token = require('../../token/token');


const brackets = levels3.model('brackets',CategoriesSchema);
const divsubs = levels3.model('divsubs',CategoriesSchema);
const mulsubs = levels3.model('mulsubs',CategoriesSchema);
const subdivmuls = levels3.model('subdivmuls', CategoriesSchema);
const Game = levels3.model('i am possibles', CategoriesSchema);
const Surprise = levels3.model('surprise', CategoriesSchema);


router.get('/bracket',token.auth, (req,res)=> {
    brackets.findRandom({},{},{limit:10},(err,questions) => {
        if(err) throw err;
        var quesMap = {};
        questions.forEach(function(question){
            quesMap[question._id] = question;
        });
        res.send(quesMap);
    })
})

router.get('/divsub',token.auth, (req,res)=> {
    divsubs.findRandom({},{},{limit:10},(err,questions) => {
        if(err) throw err;
        var quesMap = {};
        questions.forEach(function(question){
            quesMap[question._id] = question;
        });
        res.send(quesMap);
    })
})

router.get('/mulsub',token.auth, (req,res)=> {
    mulsubs.findRandom({},{},{limit:10},(err,questions) => {
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

router.get('/iampossible',token.auth, (req,res)=> {
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