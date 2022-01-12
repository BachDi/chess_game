const mongoose = require("mongoose");
const { Schema } = mongoose;
const taskSchema = new Schema({
  taskname: String,
  isDone: Boolean,
  isDeleted: Boolean,
});

const Task = mongoose.model("tasks", taskSchema);

module.exports = { Task };
