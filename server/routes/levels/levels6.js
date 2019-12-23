const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
var random = require('mongoose-simple-random');
const CategoriesSchema = require('../../models/Categories');
CategoriesSchema.plugin(random);
const {levels6} = require('../../connections/connections');
const token = require('../../token/token');


const solvecans = levels6.model('solvecans',CategoriesSchema);
const geometrys = levels6.model('geometrys',CategoriesSchema);
const percentages = levels6.model('percentages',CategoriesSchema);
const profloss = levels6.model('profloss', CategoriesSchema);
const Game = levels6.model('simpleinterests', CategoriesSchema);
const Surprise = levels6.model('surprise', CategoriesSchema);


router.get('/solveifyoucan',token.auth, (req,res)=> {
    solvecans.findRandom({},{},{limit:10},(err,questions) => {
        if(err) throw err;
        var quesMap = {};
        questions.forEach(function(question){
            quesMap[question._id] = question;
        });
        res.send(quesMap);
    })
})

router.get('/divsub',token.auth, (req,res)=> {
    geometrys.findRandom({},{},{limit:10},(err,questions) => {
        if(err) throw err;
        var quesMap = {};
        questions.forEach(function(question){
            quesMap[question._id] = question;
        });
        res.send(quesMap);
    })
})

router.get('/percentage',token.auth, (req,res)=> {
    percentages.findRandom({},{},{limit:10},(err,questions) => {
        if(err) throw err;
        var quesMap = {};
        questions.forEach(function(question){
            quesMap[question._id] = question;
        });
        res.send(quesMap);
    })
})

router.get('/profitandloss',token.auth, (req,res)=> {
    profloss.findRandom({},{},{limit:10},(err,questions) => {
        if(err) throw err;
        var quesMap = {};
        questions.forEach(function(question){
            quesMap[question._id] = question;
        });
        res.send(quesMap);
    })
})

router.get('/simpleinterest',token.auth, (req,res)=> {
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