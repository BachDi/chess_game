const crypto = require('crypto')
const {
    taskRepository
} = require('../repository')
const { taskModel } = require('../models')
function findTask(id) {
    return taskModel.findById(id)
}

function insertTask(task) {
    const newTask = {
        taskName: task.taskName,
        isDone: "false",
        isDeleted: "false"
    }
    return taskModel.createOne(newTask)
}

function updateTask(task) {
    return taskModel.updateOne(task)
}

function removeTask(task) {
    return taskModel.removeOne(task)
} 