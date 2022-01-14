const mongoose = require('mongoose');
const  Schema  = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    tasks: {
        type: [{ type: String }],
        required: false
    },
    isAdmin: {
        type: Boolean,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false,
    }
})

const Users = mongoose.model("users", userSchema);

module.exports =  Users 
