// const fs = require("fs");
const url = require("url");

// const tasks = require("../database/tasks.json");

// const { DBCollection, fileSystemDataSource } = require("../datasource");
// const tasks = fileSystemDataSource.readCollection(DBCollection.task);

// console.log(dataSource.getDataFromDatabase);

// function handlerGetTask(req, res) {
//   if (req.url.includes("tasks/:")) {
//     console.log(tasks);
//     res.setHeader("Content-Type", "application/json");
//     const startLetter = req.url.search(":");
//     const id = req.url.slice(startLetter + 1, req.url.length);
//     tasks.forEach((task) => {
//       if (task.id === Number(id)) {
//         return res.end(JSON.stringify(task));
//       }
//     });
//   } else {
//     res.setHeader("Content-Type", "application/json");
//     return res.end(JSON.stringify(tasks));
//   }
// }

// function handlerDeleteTask(req, res) {
//   if (req.url.includes("tasks/:")) {
//     res.setHeader("Content-Type", "application/json");
//     const startLetter = req.url.search(":");
//     const id = req.url.slice(startLetter + 1, req.url.length);
//     tasks.forEach((task, index) => {
//       if (task.id === Number(id)) {
//         tasks.splice(index, 1);
//         return res.end(JSON.stringify(task));
//       }
//     });
//     fs.writeFileSync("tasks.json", JSON.stringify(tasks));
//   }
// }

// function handlerCreateTask(req, res) {
//   res.setHeader("Content-Type", "application/json");
//   let rawData = "";
//   req
//     .on("data", (data) => (rawData += data))
//     .on("end", () => {
//       const newId = Number(tasks[tasks.length - 1].id) + 1;
//       const newTask = {
//         id: newId,
//         taskName: rawData,
//       };
//       tasks.push(newTask);
//       return res.end(JSON.stringify(newTask));
//     });
//   fs.writeFileSync("tasks.json", JSON.stringify(tasks));
// }

// function handlerUpdateTask(req, res) {
//   if (req.url.includes("tasks/:")) {
//     res.setHeader("Content-Type", "application/json");
//     let rawData = "";
//     req
//       .on("data", (data) => (rawData += data))
//       .on("end", () => {
//         const newTaskName = rawData;
//         const startLetter = req.url.search(":");
//         const id = req.url.slice(startLetter + 1, req.url.length);
//         tasks.forEach((task, index) => {
//           if (task.id === Number(id)) {
//             task.taskName = newTaskName;
//             return res.end(JSON.stringify(task));
//           }
//         });
//         fs.writeFileSync("tasks.json", JSON.stringify(tasks));
//       });
//   }
// }

function handleNotFound(req, res) {
  const parsedUrl = url.parse(req.url, true);
  res.statusCode = 404;
  res.end(`Route ${parsedUrl.pathname} not found.`);
}

function getTasks(request, response) {
  const chunks = [];
  request
    .on("data", (chunk) => {
      chunks.push(chunk);
    })
    .on("end", () => {
      const userId = JSON.parse(chunks.toString());
      response.setHeader("Content-Type", "application/json");
      findTask(userId)
        .then((data) => {
          response.end(JSON.stringify(data));
        })
        .catch((err) => {
          handleError(err, "controllers/index.js", "addTask");
          handleAuthResponse(response, false);
        });
    });
}

function editTask(request, response) {
  const chunks = [];
  request
    .on("data", (chunk) => {
      chunks.push(chunk);
    })
    .on("end", () => {
      const task = JSON.parse(chunks.length > 0 ? chunks : "{}");
      updateTask(task)
        .then(() => {
          handleAuthResponse(response, true);
        })
        .catch((err) => {
          handleError(err, "controllers/index.js", "editTask");
          handleAuthResponse(response, false);
        });
    });
}

function deleteTask(request, response) {
  const chunks = [];
  request
    .on("data", (chunk) => {
      chunks.push(chunk);
    })
    .on("end", () => {
      const task = JSON.parse(chunks.length > 0 ? chunks : "{}");
      removeTask(task)
        .then(() => {
          handleAuthResponse(response, true);
        })
        .catch((err) => {
          handleError(err, "controllers/index.js", "deleteTask");
          handleAuthResponse(response, false);
        });
    });
}

function addTask(request, response) {
  const chunks = [];
  request
    .on("data", (chunk) => {
      chunks.push(chunk);
    })
    .on("end", () => {
      const task = JSON.parse(chunks.length > 0 ? chunks : "{}");
      insertTask(task)
        .then(() => {
          handleAuthResponse(response, true);
        })
        .catch((err) => {
          handleError(err, "controllers/index.js", "addTask");
          handleAuthResponse(response, false);
        });
    });
}

module.exports = { handleNotFound, getTasks, addTask, editTask, deleteTask };
