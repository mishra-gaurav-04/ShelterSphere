import * as joi from 'joi';

export const registerUserSchema = joi.object({
    name : joi.string().required(),
    contactNumber : joi.string().required(),
    email : joi.string().email().required(),
    password : joi.string().required(),
    location : joi.string().required(),
    country : joi.string().required()
});

export const loginUserSchema = joi.object({
    email : joi.string().email().required(),
    password : joi.string().required()
});