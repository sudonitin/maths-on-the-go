const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
var random = require('mongoose-simple-random');
const CategoriesSchema = require('../../models/Categories');
CategoriesSchema.plugin(random);
const {levels5} = require('../../connections/connections');
const token = require('../../token/token');


const bodmas = levels5.model('bodmas',CategoriesSchema);
const findroots = levels5.model('findroots',CategoriesSchema);
const lineareqns = levels5.model('lineareqns',CategoriesSchema);
const quadeqns = levels5.model('quadeqns', CategoriesSchema);
const Game = levels5.model('solvingbads', CategoriesSchema);
const Surprise = levels5.model('surprise', CategoriesSchema);


router.get('/bodmas',token.auth, (req,res)=> {
    bodmas.findRandom({},{},{limit:10},(err,questions) => {
        if(err) throw err;
        var quesMap = {};
        questions.forEach(function(question){
            quesMap[question._id] = question;
        });
        res.send(quesMap);
    })
})

router.get('/findroot',token.auth, (req,res)=> {
    findroots.findRandom({},{},{limit:10},(err,questions) => {
        if(err) throw err;
        var quesMap = {};
        questions.forEach(function(question){
            quesMap[question._id] = question;
        });
        res.send(quesMap);
    })
})

router.get('/lineareqn',token.auth, (req,res)=> {
    lineareqns.findRandom({},{},{limit:10},(err,questions) => {
        if(err) throw err;
        var quesMap = {};
        questions.forEach(function(question){
            quesMap[question._id] = question;
        });
        res.send(quesMap);
    })
})

router.get('/quadeqn',token.auth, (req,res)=> {
    quadeqns.findRandom({},{},{limit:10},(err,questions) => {
        if(err) throw err;
        var quesMap = {};
        questions.forEach(function(question){
            quesMap[question._id] = question;
        });
        res.send(quesMap);
    })
})

router.get('/solvingbads',token.auth, (req,res)=> {
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