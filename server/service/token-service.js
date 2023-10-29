const jwt = require('jsonwebtoken');
const createError = require('http-errors');
const dotenv = require('dotenv');

dotenv.config();

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;

const signAccessToken = (userId) => {
    return new Promise((resolve,reject) => {
        const payload = {};
        const options = {
            expiresIn : process.env.ACCESS_TOKEN_EXPIRE_TIME,
            issuer : 'localhost',
            audience : userId
        };
        jwt.sign(payload,accessTokenSecret,options,(err,token) => {
            if(err){
                console.log(err);
                return reject(createError.InternalServerError());
            }

            resolve(token);
        });
    });
};

const signRefreshToken = (userId) => {
    return new Promise((resolve,reject) => {
        const payload = {};
        const options = {
            expiresIn : process.env.REFRESH_TOKEN_EXPIRE_TIME,
            issuer : 'localhost',
            audience : userId
        };
        jwt.sign(payload,refreshTokenSecret,options,(err,token) => {
            if(err){
                console.log(err)
                return reject(createError.InternalServerError());
            }
            resolve(token);
        })
    })
}

const verifyAccessToken = (req,res,next) => {
    const token = req.cookies.accessToken;

    if(!token){
        return next(createError.Unauthorized());
    }

    jwt.verify(token,accessTokenSecret,(err,payload) => {
        if(err){
            const message = err.name === 'JsonWebTokenError' ? 'Unauthorized' : err.message;
            return next(createError.Unauthorized(message));
        }
        req.payload = payload;
        next();
    })
}

module.exports = {
    signAccessToken,
    signRefreshToken,
    verifyAccessToken
}