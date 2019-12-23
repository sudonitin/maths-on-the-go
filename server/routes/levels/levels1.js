const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
var random = require('mongoose-simple-random');
const CategoriesSchema = require('../../models/Categories');
CategoriesSchema.plugin(random);
const {levels} = require('../../connections/connections');
const token = require('../../token/token');


const Addition = levels.model('additions',CategoriesSchema);
const Substraction = levels.model('substractions',CategoriesSchema);
const AdditionSubstraction = levels.model('additionSubstraction',CategoriesSchema);
const Division = levels.model('divisions',CategoriesSchema);
const Multiplication = levels.model('multiplications',CategoriesSchema);
const Suprise = levels.model('surprise',CategoriesSchema);


router.get('/addition',token.auth, (req,res)=> {
    Addition.findRandom({},{},{limit:10},(err,questions) => {
        if(err) throw err;
        var quesMap = {};
        questions.forEach(function(question){
            quesMap[question._id] = question;
        });
        res.send(quesMap);
    })
})
// dslkdmdkl
router.get('/substraction',token.auth,  (req,res)=> {
    Substraction.findRandom({},{},{limit:10},(err,questions) => {
        if(err) throw err;
        var quesMap = {};
        questions.forEach(function(question){
            quesMap[question._id] = question;
        });
        res.send(quesMap);
    })
})

router.get('/additionsubstraction',token.auth,  (req,res)=> {
    AdditionSubstraction.findRandom({},{},{limit:10},(err,questions) => {
        if(err) throw err;
        var quesMap = {};
        questions.forEach(function(question){
            quesMap[question._id] = question;
        })
        res.send(quesMap);
    })
})

router.get('/division',token.auth,(req,res)=> {
    Division.findRandom({},{},{limit:10},(err,questions) => {
        if(err) throw err;
        var quesMap = {};
        questions.forEach(function(question){
            quesMap[question._id] = question;
        })
        res.send(quesMap);
    })
})

router.get('/multiplication',token.auth,(req,res)=> {
    Multiplication.findRandom({},{},{limit:10},(err,questions) => {
        if(err) throw err;
        var quesMap = {};
        questions.forEach(function(question){
            quesMap[question._id] = question;
        })
        res.send(quesMap);
    })
})

router.get('/surprise',token.auth,(req,res)=> {
    Suprise.findRandom({},{},{limit:10},(err,questions) => {
        if(err) throw err;
        var quesMap = {};
        questions.forEach(function(question){
            quesMap[question._id] = question;
        })
        res.send(quesMap);
    })
})

module.exports = router;