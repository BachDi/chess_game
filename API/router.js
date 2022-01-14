const url = require("url");
const {
  getTasks,
  addTask,
  handleNotFound,
  getTaskById,
  editTaskById,
  deleteTaskById,
} = require("./controller/task");
const { handleError } = require("./helpers");
const { parseRequestBody } = require('./middlewares/parse-request-body')


const { handlerGetImage } = require("./controller/image");
const { signUp, getUsers, getUserById, editUserById, deleteUserById } = require("./controller/user");

const routes = {
  GET: {
    "/tasks": {
      controller: getTasks,
      middlewares: [parseRequestBody],
    },
    "/users": {
      controller: getUsers,
      middlewares: [parseRequestBody],
    },
  },
  DELETE: {
    "/delete-task": {
      controller: deleteTaskById,
      middlewares: [parseRequestBody],
    },
    "/delete-user": {
      controller: deleteUserById,
      middlewares: [parseRequestBody],
    },
  },
  POST: {
    "/tasks": {
      controller: addTask,
      middlewares: [parseRequestBody],
    },
    "/find-task": {
      controller: getTaskById,
      middlewares: [parseRequestBody],
    },
    "/sign-up": {
      controller: signUp,
      middlewares: [parseRequestBody],
    },
    "/find-user": {
      controller: getUserById,
      middlewares: [parseRequestBody],
    },
  },
  PATCH: {
    "/edit-task": {
      controller: editTaskById,
      middlewares: [parseRequestBody],
    },
    "/edit-user": {
      controller: editUserById,
      middlewares: [parseRequestBody],
    },
  },
};

function getRouter(req) {
  const parsedUrl = url.parse(req.url, true);
  if (routes[req.method] && routes[req.method][parsedUrl.pathname]) {
    const currentRouteData = routes[req.method][parsedUrl.pathname];
    if (
      currentRouteData.middlewares &&
      currentRouteData.middlewares.length > 0
    ) {
      return function controller(req, res) {
        try {
          let promise = currentRouteData.middlewares[0](req, res);
          currentRouteData.middlewares.forEach((middleware, index) => {
            if (index > 0) {
              promise.then(() => middleware(req, res));
            }
          });
          // Call controller after all interceptor (middlewares)
          promise.then(() => currentRouteData.controller(req, res));
          return promise;
        } catch (error) {
          handleError(error, "router.js", "route() -> controller()");
          res.statusCode = 500;
          res.end();
        }
      };
    }
    return routes[req.method][parsedUrl.pathname].controller;
  }

  return handleNotFound;
}

module.exports = { routes, getRouter };
