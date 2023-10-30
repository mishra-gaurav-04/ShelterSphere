const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');


const userSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        require : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
        minLength : 8,
        select : false
    },
    avatar: {
        type : String,
        default : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    }
},{
    timestamps : true
});

userSchema.pre('save',async function(next){
    try{
        const salt = await bcrypt.genSalt(12);
        const hashPassword = await bcrypt.hash(this.password,salt);
        this.password = hashPassword;
        next();
    }
    catch(error){
        next(error);
    }
});

userSchema.methods.correctPassword = async function(candidatePassword,userPassword){
    return await bcrypt.compare(candidatePassword,userPassword);
};

module.exports = mongoose.model('User',userSchema);