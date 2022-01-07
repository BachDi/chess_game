const Repository = require('./base.repository')
const TaskModel = require('../models')

const taskRepository = new Repository( "task", TaskModel)

module.exports = taskRepository