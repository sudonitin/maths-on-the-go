const validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateForgotInput(data){
    let errors = {};

    data.email = !isEmpty(data.email)?data.email:"";

    if(validator.isEmpty(data.email)){
        errors.email = "Email is required";
    }else if(!validator.isEmail(data.email)){
        errors.email = "Email is invalid";
    }

    return{
        errors,
        isValid:isEmpty(errors)
    };
    
}