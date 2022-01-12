const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
    id: String,
    password: String,
    email: String,
})

const User = mongoose.model('User', userSchema);

module.exports = {User}
