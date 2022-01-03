const http = require("http");
// const fs = require("fs");
// const tasks = require("./tasks.json");
// const app = require("./app");
const routes = require("./routes/routes");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  const routeUrl = req.url.split("?")[0];
  const method = req.method;
  const router = getRouter(req);
  console.log(router);
  const handler = router[method][routeUrl];
  console.log(handler);
  return handler(req, res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function getRouter(req) {
  const routeUrl = req.url.split("?")[0];
  console.log(routeUrl);

  switch (routeUrl) {
    case "/tasks":
      return routes.task;
    default:
      return {};
  }
}