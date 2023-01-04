const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        reuired: true
    },
    email:{
        type: String,
        reuired: true,
        unique: true
    },
    password:{
        type: String,
        default: 'General'
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('users',UserSchema)