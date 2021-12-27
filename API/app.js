const http = require("http");
const fs = require("fs");
const tasks = require("./tasks.json");

const hostname = "127.0.0.1";
const port = 3000;

const route = {
  GET: {
    "/tasks": handlerGetTask,
    // "/image": handlerGetTask,
  },
  DELETE: {
    "/tasks": handlerDeleteTask,
  },
  POST: {
    "/tasks": handlerCreateTask,
  },
  PUT: {
    "/tasks": handlerUpdateTask,
  },
  PATCH: {
    "/tasks": handlerUpdateTask,
  },
};

console.log(Object.keys(route.GET));
console.log(Object.values(route.GET));

function handlerGetTask(req, res) {
  if (req.url === "/tasks") {
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify(tasks));
  } else if (req.url.search("tasks/:") !== -1) {
    res.setHeader("Content-Type", "application/json");
    const startLetter = req.url.search(":");
    const id = req.url.slice(startLetter + 1, req.url.length);
    tasks.forEach((task) => {
      if (task.id === Number(id)) {
        return res.end(JSON.stringify(task));
      }
    });
  } else if (req.url === "/image") {
    fs.readFile("img/hinh1.jpg", (err, data) => {
      if (err) {
        res.writeHead(404);
        res.write("File not found");
      } else {
        res.writeHead(200, { "Content-Type": "image/jpeg" });
        return res.end(data);
      }
    });
  }
}

function handlerDeleteTask(req, res) {
  if (req.method === "DELETE") {
    if (req.url.search("tasks/:") !== -1) {
      res.setHeader("Content-Type", "application/json");
      const startLetter = req.url.search(":");
      const id = req.url.slice(startLetter + 1, req.url.length);
      tasks.forEach((task, index) => {
        if (task.id === Number(id)) {
          tasks.splice(index, 1);
          return res.end(JSON.stringify(task));
        }
      });
      fs.writeFileSync("tasks.json", JSON.stringify(tasks));
    }
  }
}

function handlerCreateTask(req, res) {
  if (req.method === "POST") {
    if (req.url === "/tasks") {
      res.setHeader("Content-Type", "application/json");
      let rawData = "";
      req
        .on("data", (data) => (rawData += data))
        .on("end", () => {
          const newId = Number(tasks[tasks.length - 1].id) + 1;
          const newTask = {
            id: newId,
            taskName: rawData,
          };
          tasks.push(newTask);
          return res.end(JSON.stringify(newTask));
        });
      fs.writeFileSync("tasks.json", JSON.stringify(tasks));
    }
  }
}

function handlerUpdateTask(req, res) {
  if (req.method === "PATCH") {
    if (req.url.search("tasks/:") !== -1) {
      res.setHeader("Content-Type", "application/json");
      let rawData = "";
      req
        .on("data", (data) => (rawData += data))
        .on("end", () => {
          const newTaskName = rawData;
          const startLetter = req.url.search(":");
          const id = req.url.slice(startLetter + 1, req.url.length);
          tasks.forEach((task, index) => {
            if (task.id === Number(id)) {
              task.taskName = newTaskName;
              return res.end(JSON.stringify(task));
            }
          });
          fs.writeFileSync("tasks.json", JSON.stringify(tasks));
        });
    }
  }
}

module.exports = {
  requestHandler: function (req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });

    var path = url.parse(req.url);
    var pathname = path.pathname;
    var query = path.query;
    if (query) {
      query = +query.charAt(query.length - 1);
    }

    if (pathname === "/tasks" && req.method === "GET") {
      handlerGetTask(req, res, query);
    } else if (pathname === "/tasks" && req.method === "DELETE") {
      handlerDeleteTask(req, res, query);
    } else if (pathname === "/tasks" && req.method === "POST") {
      handlerCreateTask(req, res);
    } else if (pathname === "/tasks" && req.method === "PATCH") {
      handlerUpdateTask(req, res, query);
    } else {
      res.write("404 not found");
    }
  },
};
