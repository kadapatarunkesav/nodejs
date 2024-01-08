const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        require: true,
        uniqued: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    }
},
    { timestamps: true })

export const user = mongoose.model('user', userSchema)