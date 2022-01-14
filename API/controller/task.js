// const fs = require("fs");
const url = require("url");
const { handleError } = require("../helpers");
const { handleAuthResponse } = require("../repository/helpers");

const {
  findTasks,
  insertTask,
  updateTask,
  findTaskById,
} = require("./helpers");

function handleNotFound(request, response) {
  const parsedUrl = url.parse(request.url, true);
  response.statusCode = 404;
  response.end(`Route ${parsedUrl.pathname} not found.`);
}

function getTasks(request, response) {
  response.setHeader('Content-Type', 'application/json');
  findTasks()
    .then(data => {
      response.end(JSON.stringify(data))
    })
    .catch(error => {
      handleError(error, "controllers/task.js", "getTask")
      handleAuthResponse(response, false);
    })
}

function getTaskById(request, response) {
  response.setHeader('Content-Type', 'application/json');
  const taskId = request.body;
  findTaskById(taskId)
    .then(foundTask => {
      if (foundTask) {
        let info = {
          _id: foundTask._id,
          taskName: foundTask.taskName,
          isDone: foundTask.isDone,
          isDeleted: foundTask.isDeleted
        }
        response.statusCode = 200
        response.end(JSON.stringify(info));
      }
      else {
        throw new Error('Unknown task');
      }
    }).catch(error => {
      handleError(error, 'controllers/task.js', 'getTaskById');
      handleAuthResponse(response, false);
    })
}

function editTaskById(request, response) {
  const task = request.body;
  const taskId = task._id;
  updateTask(taskId, task)
    .then(() => {
      handleAuthResponse(response, true)
    }).catch(error => {
      handleError(error, 'controllers/user.js', 'editTaskByID');
      handleAuthResponse(response, false);
    })
}

function deleteTaskById(request, response) {
  let task = request.body;
  const taskId = task._id;
  findTaskById(taskId).then(foundTask => {
    debugger;
    if (foundTask) {
      foundTask.isDeleted = true;
      updateTask(taskId, foundTask).then(() => {
        handleAuthResponse(response, true);
      })
    }
    else {
      handleAuthResponse(response, false)
    }
  }).catch(error => {
    handleError(error, 'controllers/tasks.js', 'deleteTaskByID');
    handleAuthResponse(response, false);
  })
}

function addTask(request, response) {
  const task = request.body;

  insertTask(task)
    .then(() => {
      handleAuthResponse(response, true);
    })
    .catch((error) => {
      handleError(error, "controllers/task.js", "addTask");
      handleAuthResponse(response, false);
    });

}

function pingWithAuth(request, response) {
  response.end('Success')
}

module.exports = { handleNotFound, getTasks, getTaskById, addTask, editTaskById, deleteTaskById };
