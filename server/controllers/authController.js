const User = require('../models/User');
const createError = require('http-errors');
const {registerSchema,loginSchema} = require('../utils/auth.validate');

exports.signUp = async(req,res,next) => {
    try{
        const result = await registerSchema.validateAsync(req.body);
        const existingUser = await User.findOne({email : result.email});
        if(existingUser){
            throw createError.Conflict('Email is already in User');
        }
        const newUser = await User.create(result);

    }
    catch(error){

    }
}