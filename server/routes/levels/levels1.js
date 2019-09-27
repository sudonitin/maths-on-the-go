const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const CategoriesSchema = require('../../models/Categories');
const {users,levels} = require('../../connections/connections');

const Addition = levels.model('additions',CategoriesSchema);
const Substraction = levels.model('substractions',CategoriesSchema);
const AdditionSubstraction = levels.model('additionSubstraction',CategoriesSchema);
const Division = levels.model('divisions',CategoriesSchema);
const Multiplication = levels.model('multiplications',CategoriesSchema);
const Mix = levels.model('mix',CategoriesSchema);


router.get('/addition', (req,res)=> {
    Addition.find({},(err,questions) => {
        if(err) throw err;
        var quesMap = {};
        questions.forEach(function(question){
            quesMap[question._id] = question;
        })
        res.send(quesMap);
    })
})

router.get('/substraction', (req,res)=> {
    Substraction.find({},(err,questions) => {
        if(err) throw err;
        var quesMap = {};
        questions.forEach(function(question){
            quesMap[question._id] = question;
        })
        res.send(quesMap);
    })
})

router.get('/additionsubstraction', (req,res)=> {
    AdditionSubstraction.find({},(err,questions) => {
        if(err) throw err;
        var quesMap = {};
        questions.forEach(function(question){
            quesMap[question._id] = question;
        })
        res.send(quesMap);
    })
})

router.get('/division', (req,res)=> {
    Division.find({},(err,questions) => {
        if(err) throw err;
        var quesMap = {};
        questions.forEach(function(question){
            quesMap[question._id] = question;
        })
        res.send(quesMap);
    })
})

router.get('/multiplication', (req,res)=> {
    Multiplication.find({},(err,questions) => {
        if(err) throw err;
        var quesMap = {};
        questions.forEach(function(question){
            quesMap[question._id] = question;
        })
        res.send(quesMap);
    })
})

router.get('/mix', (req,res)=> {
    Mix.find({},(err,questions) => {
        if(err) throw err;
        var quesMap = {};
        questions.forEach(function(question){
            quesMap[question._id] = question;
        })
        res.send(quesMap);
    })
})

module.exports = router;