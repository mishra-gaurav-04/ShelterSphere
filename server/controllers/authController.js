const User = require('../models/User');
const createError = require('http-errors');
const {registerSchema,loginSchema} = require('../utils/auth.validate');
const {signAccessToken,signRefreshToken} = require('../service/token-service');
const UserData = require('../utils/UserData');

exports.signUp = async(req,res,next) => {
    try{
        const result = await registerSchema.validateAsync(req.body);
        const existingUser = await User.findOne({email : result.email});
        if(existingUser){
            throw createError.Conflict('Email is already in User');
        }
        const newUser = await User.create(result);
        
        const accessToken = await signAccessToken(newUser.id);
        const refreshToken = await signRefreshToken(newUser.id);

        res.cookie('accessToken',accessToken,{httpOnly:true,maxAge:60*60*1000});
        res.cookie('refreshToken',refreshToken,{httpOnly:true,maxAge:24*60*60*1000});

        const userData = new UserData(newUser);
        res.status(201).json({
            status : 'success',
            message : 'User Created Successfully',
            userData
        })
    }
    catch(error){
        if(error.isJoi === true){
            error.status = 422
        }
        next(error);
    }
}

