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
            status : true,
            message : 'User Created Successfully',
            userData,
            // accessToken
        })
    }
    catch(error){
        if(error.isJoi === true){
            error.status = 422
        }
        next(error);
    }
}

exports.signIn = async(req,res,next) => {
    try{
        const result = await loginSchema.validateAsync(req.body);
        // console.log(result.password);
        const user = await User.findOne({email : result.email}).select('+password');
        // console.log(user.password);
        if(!user){
            throw createError.NotFound('User Not Found');
        }

        const isValid = await user.correctPassword(result.password,user.password);

        if(!isValid){
            throw createError.Unauthorized('Invalid Email or Password');
        }

        const accessToken = await signAccessToken(user.id);
        const refreshToken = await signRefreshToken(user.id);

        res.cookie('accessToken',accessToken,{httpOnly : true,maxAge : 60*60*1000});
        res.cookie('refrehToken',refreshToken,{httpOnly:true,maxAge:24*60*60*1000});

        const userData = new UserData(user);

        res.status(200).json({
            status : true,
            message : 'User Logged In Successfully',
            userData,
            // accessToken
        });
    }
    catch(error){
        if(error.isJoi === true){
            return next(createError.BadRequest('Invalid email or password'))
        }
        // console.log(error);
        next(error);
    }
}

 exports.signOut = async(req,res,next) => {
    try{
        res.clearCookie('accessToken');
        res.clearCookie('refreshToken');
        res.status(200).json({
            status : true,
            message : 'User logged out successfully'
        })
    }
    catch(err){
        next(error);
    }
 }