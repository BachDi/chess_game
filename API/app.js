const http = require("http");
const fs = require("fs");
const tasks = require("./tasks.json");

const hostname = "127.0.0.1";
const port = 3000;


// console.log(Object.keys(route.GET));
// console.log(Object.values(route.GET));


module.exports = {
  requestHandler: function (req, res) {
    route[req.method];

    // res.writeHead(200, { "Content-Type": "application/json" });

    // var path = url.parse(req.url);
    // var pathname = path.pathname;
    // var query = path.query;
    // if (query) {
    //   query = +query.charAt(query.length - 1);
    // }

    // if (pathname === "/tasks" && req.method === "GET") {
    //   handlerGetTask(req, res, query);
    // } else if (pathname === "/tasks" && req.method === "DELETE") {
    //   handlerDeleteTask(req, res, query);
    // } else if (pathname === "/tasks" && req.method === "POST") {
    //   handlerCreateTask(req, res);
    // } else if (pathname === "/tasks" && req.method === "PATCH") {
    //   handlerUpdateTask(req, res, query);
    // } else {
    //   res.write("404 not found");
    // }
  },
};
