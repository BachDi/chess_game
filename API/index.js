const http = require("http");
const fs = require("fs");
const tasks = require("./tasks.json");
const app = require("./app");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer(app.requestHandler);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
