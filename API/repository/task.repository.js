const Repository = require('./base.repository')
const { taskModel } = require('../models')
const { DBCollections } = require('../datasources')

const taskRepository = new Repository(DBCollections.TASK, taskModel)

module.exports = taskRepository
