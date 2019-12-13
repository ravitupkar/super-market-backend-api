const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
        minlength: 3
    },
    lastName : {
        type : String,
        required : true,
        minlength: 3
    },
    subscribe : {
        type : Boolean,
        required : true
    },
    email : {
        type: String, 
        required: true, 
        unique: true 
    },
    password : {
        type: String, 
        required: true
    },
    terms : {
        type: Boolean, 
        required: true
    }
},{
    timestamps : true
});

userSchema.pre('save', async function(next){
    try{
        if (!this.isModified) {
            return next();
        } 
        const hashed = await bcrypt.hash(this.password, 10);
        this.password = hashed;
        return next();
    }catch(err){
        return next(err);
    }
});

userSchema.methods.comparePassword = async function(attempt, next){
    try{
        return await bcrypt.compare(attempt, this.password);
    }catch(err){
        return next(err);
    }
}

module.exports = mongoose.model('Users', userSchema);
