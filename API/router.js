const url = require("url");
const { handleNotFound } = require("./controller/task");
const {
  getTasks,
  addTask,
  editTask,
  deleteTask,
} = require("./controller/task");

const parseRequestBody = require("./middlewares/parse-request-body");

const { handlerGetImage } = require("./controller/image");

const routes = {
  GET: {
    "/tasks": {
      controller: getTasks,
      middlewares: [parseRequestBody],
    },
    image: {
      controller: handlerGetImage,
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

function getRouter(req) {
  const parsedUrl = url.parse(req.url, true);
  if (routes[req.method] && routes[req.method][parsedUrl.pathname]) {
    const currentRouteData = routes[req.method][parsedUrl.pathname];
    console.log(routes[req.method][parsedUrl.pathname].controller);
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
              console.log("1");
            }
          });
          // Call controller after all interceptor (middlewares)
          promise.then(() => currentRouteData.controller(req, res));
          console.log("2", promise);
          return promise;
        } catch (error) {
          handleError(error, "router.js", "route() -> controller()");
          console.log("3");
          res.statusCode = 500;
          res.end();
        }
      };
    }
    console.log("4");
    return routes[req.method][parsedUrl.pathname].controller;
  }

  return handleNotFound;
}

module.exports = { routes, getRouter };
