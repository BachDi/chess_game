const http = require("http");
const routes = require("./routes/routes");

const hostname = "127.0.0.1";
const port = 3000;

//connect mongoose
const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://set2021_tuphuc:hello@cluster0.vbssm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

let connectionDB =mongoose.connection

connectionDB.on('error', function (err) {
  if (err) {
    console.log('Connect DB failed');
  }
})

connectionDB.on('connected', function () {
    console.log('Connect DB successfully');
})

connectionDB.on('disconnected', function () {
    console.log('Connect DB failed');
})

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

