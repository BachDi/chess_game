const http = require("http");
const fs = require("fs");
const tasks = require("./tasks.json");
const app = require("./app");
const routes = require("./routes/task")

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  const routeUrl = req.url.split("?")[0];
  const method = req.method;
  const router = getRouter(req);
  const handler = router[method][routeUrl];
  return handler(req, res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function getRouter(req) {
  const routeUrl = req.url.split("?")[0];

  switch (routeUrl) {
    case "/tasks":
      return routes.task;
    default:
      return {};
  }
}