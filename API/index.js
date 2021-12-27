const http = require("http");
const fs = require("fs");
const tasks = require("./tasks.json");

const hostname = "127.0.0.1";
const port = 3000;

const option = {
  method: "GET",
  url: "/tasks",
};
const option2 = {
  method: "PATCH",
  url: "/tasks",
};
const option3 = {
  method: "DELETE",
  url: "/tasks/:id",
};
const option4 = {
  method: "POST",
  url: "/tasks",
};

const option5 = {
  method: "GET",
  url: "/image",
};

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  if (req.method === "GET") {
    if (req.url === option.url) {
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
    } else if (req.url === option5.url) {
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
  } else if (req.method === "DELETE") {
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
  } else if (req.method === "POST") {
    if (req.url === option4.url) {
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
  } else if (req.method === "PATCH") {
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
  } else if (req.method === "PUT") {
    if (req.url.search("tasks/:") !== -1) {
      res.setHeader("Content-Type", "application/json");
      let rawData = "";
      req
        .on("data", (data) => (rawData += data))
        .on("end", () => {
          const startLetter = req.url.search(":");
          const id = req.url.slice(startLetter + 1, req.url.length);
          const newTask = {
            id: newId,
            ...rawData,
          };
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

  res.end("Hello world");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
