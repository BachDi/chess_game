const Repository = require('./base.repository')
const { taskModel } = require("../models");
const { DBCollection } = require("../datasource");

const taskRepository = new Repository(DBCollection.task, taskModel);

module.exports = taskRepository
