const fs = require("fs");
// const tasks = require("../database/tasks.json");

const { DBCollections, fileSystemDataSource } = require("../datasource/index.js");
const tasks = fileSystemDataSource.readCollection(DBCollections);

const taskHandler = {
  handlerGetTask,
  handlerCreateTask,
  handlerDeleteTask,
  handlerUpdateTask,
};

// console.log(dataSource.getDataFromDatabase);

function handlerGetTask(req, res) {
  if (req.url.includes("tasks/:")) {
    res.setHeader("Content-Type", "application/json");
    const startLetter = req.url.search(":");
    const id = req.url.slice(startLetter + 1, req.url.length);
    tasks.forEach((task) => {
      if (task.id === Number(id)) {
        return res.end(JSON.stringify(task));
      }
    });
  } else {
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify(tasks));
  }
}

function handlerDeleteTask(req, res) {
  if (req.url.includes("tasks/:")) {
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

function handlerCreateTask(req, res) {
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

function handlerUpdateTask(req, res) {
  if (req.url.includes("tasks/:")) {
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

module.exports = taskHandler;
