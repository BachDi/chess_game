const mongoose = require('mongoose');
// const { DBCollection } = require("../datasource");
const  Schema  = mongoose.Schema;

const taskSchema = new Schema({
  taskname: {
    type: String,
    required: true
  },
  isDone: {
    type: Boolean,
    required: true
  },
  isDeleted: {
    type: Boolean,
    required: true
  },
});

// const Task = mongoose.model(DBCollection.task, taskSchema);
const Tasks = mongoose.model("tasks", taskSchema)

module.exports = Tasks;
