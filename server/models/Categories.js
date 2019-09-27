const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategoriesSchema = new Schema({
    Question:{
        type:String,
        required:true
    },
    Answer:{
        type:String,
        required:true
    }
})

module.exports = CategoriesSchema;