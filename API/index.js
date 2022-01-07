const http = require("http");
const routes = require("./routes/routes");
const url = require("url");
const { handleNotFound } = require("./controller/task");
const { DBCollection, fileSystemDataSource } = require("./datasource");

const hostname = "127.0.0.1";
const port = 3000;

//connect mongoose
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://set2021_tuphuc:hello@cluster0.vbssm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

let connectionDB = mongoose.connection;

connectionDB.on("error", function (err) {
  if (err) {
    console.log("Connect DB failed");
  }
});

connectionDB.on("connected", function () {
  console.log("Connect DB successfully");
});

connectionDB.on("disconnected", function () {
  console.log("Connect DB failed");
});

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  // const routeUrl = `/${req.url.split("/")[1]}`;
  // const method = req.method;
  const router = getRouter(req);
  router(req, res);
  console.log("router server", router);
  // const handler = router[method][routeUrl];
  // return handler(req, res);
  // const controller = router.route(request);
  // controller(request, response);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  fileSystemDataSource
    .readCollection(DBCollection["task"])
    .then((data) => console.log(data))
    .catch((err) => {
      handleError(err, "repositories/base.repository.js", "findById");
      return undefined;
    });
});

function getRouter(req) {
  // const routeUrl = req.url.split("?")[0];
  // console.log("url", req.url);
  // switch (routeUrl.includes("/tasks")) {
  //   case true:
  //     return routes.task;
  //   default:
  //     return {};
  // }

  const parsedUrl = url.parse(req.url, true);
  // console.log(parsedUrl);
  console.log(routes.task[req.method][parsedUrl.pathname]);
  if (routes.task[req.method][parsedUrl.pathname]) {
    const currentRouteData = routes.task[req.method][parsedUrl.pathname];
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

    return currentRouteData.controller;
  }

  return handleNotFound;
}

