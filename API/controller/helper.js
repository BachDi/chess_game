const { taskRepository } = require("../repository");

function findTask() {
  return taskRepository.find();
}

function insertTask(task) {
  const newTask = {
    taskName: task.taskName,
    isDone: false,
    isDeleted: false,
  };
  return taskRepository.createOne(newTask);
}

function updateTask(task) {
  return taskRepository.updateOne(task);
}

function removeTask(task) {
  return taskRepository.removeOne(task);
}

module.exports = { findTask, insertTask, updateTask, removeTask };
