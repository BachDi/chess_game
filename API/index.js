const http = require("http");
const routes = require("./routes/routes");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  const routeUrl = `/${req.url.split("/")[1]}`;
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
  console.log("url", req.url);
  switch (routeUrl.includes("/tasks")) {
    case true:
      return routes.task;
    default:
      return {};
  }
}
