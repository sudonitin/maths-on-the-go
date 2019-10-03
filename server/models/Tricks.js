const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TricksSchema = new Schema({
    trick:{
        type:String,
        required:true
    }
})

module.exports = TricksSchema;