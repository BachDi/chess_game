// const fs = require("fs");
const url = require("url");
const { handleError } = require("../helpers");

const {
  findTask,
  insertTask,
  updateTask,
  removeTask,
} = require("../controller/helper");

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
      // const userId = JSON.parse(chunks.toString())
      response.setHeader("Content-Type", "application/json");
      findTask()
        .then((data) => {
          response.end(JSON.stringify(data));
        })
        .catch((err) => {
          handleError(err, "controllers/index.js", "getTask");
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
