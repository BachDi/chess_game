const http = require("http");
const { getRouter } = require("./router");

const { DBCollection, fileSystemDataSource } = require("./datasource");

const hostname = "127.0.0.1";
const port = 8000;

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
  const router = getRouter(req);
  console.log("router server", router);
  router(req, res);
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


