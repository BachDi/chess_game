const {
  getTasks,
  addTask,
  editTask,
  deleteTask,
} = require("../controller/task");

const parseRequestBody = require("../middlewares/parse-request-body");

const taskRoutes = {
  GET: {
    "/tasks": {
      controller: getTasks,
      middlewares: [parseRequestBody],
    },
  },
  DELETE: {
    "/tasks": {
      controller: deleteTask,
      middlewares: [parseRequestBody],
    },
  },
  POST: {
    "/tasks": {
      controller: addTask,
      middlewares: [parseRequestBody],
    },
  },
  PUT: {
    "/tasks": {
      controller: editTask,
      middlewares: [parseRequestBody],
    },
  },
  PATCH: {
    "/tasks": {
      controller: editTask,
      middlewares: [parseRequestBody],
    },
  },
};

module.exports = taskRoutes;
