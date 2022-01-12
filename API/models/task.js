const mongoose = require('mongoose');
const { Schema } = mongoose;
const taskSchema = new Schema({
    taskname: String,
    isDone: Boolean,
    isDeleted: Boolean,
})

const Task = mongoose.model('Task', taskSchema);

module.exports = {Task}
