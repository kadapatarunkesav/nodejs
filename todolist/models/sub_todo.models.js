const mongoose = require('mongoose');

const sub_todo = mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default:false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId
    }
}, { timestamps: true })

export const sub_Todo = mongoose.model('sub_Todo')