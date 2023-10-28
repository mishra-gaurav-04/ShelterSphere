const JOI = require('@hapi/joi');

const registerSchema = JOI.object({
    name : JOI.string().required(),
    email : JOI.string().required().email(),
    password : JOI.string().min(2).required()
})

const loginSchema = JOI.object({
    email : JOI.string().required().email(),
    password : JOI.string().min(2).required()
})

module.exports = {
    registerSchema,
    loginSchema
}