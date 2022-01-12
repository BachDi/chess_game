const mongoose = require('mongoose');
const { DBCollection } = require("../datasource");
const { Schema } = mongoose;
const taskSchema = new Schema({
  taskname: String,
  isDone: Boolean,
  isDeleted: Boolean,
});

const Task = mongoose.model(DBCollection.task, taskSchema);

module.exports = {Task}
