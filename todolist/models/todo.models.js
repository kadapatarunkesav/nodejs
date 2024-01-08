const mongoose = require('mongoose');

const todo = mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }, sub_todo: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'sub_Todo'
        }
    ]

}, { timestamps: true })