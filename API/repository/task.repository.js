const Repository = require('./base.repository')
const { TaskModel } = require("../models");
const { DBCollection } = require("../datasource");

const taskRepository = new Repository(DBCollection.task, TaskModel);

module.exports = taskRepository
