// const fs = require("fs");
const url = require("url");
const { handleError } = require("../helpers");
const { handleAuthResponse } = require("../repository/helpers");

const {
  findTask,
  insertTask,
  updateTask,
  removeTask,
  findTaskById,
  verifyTask,
} = require("./helpers");

function handleNotFound(request, response) {
  const parsedUrl = url.parse(request.url, true);
  response.statusCode = 404;
  response.end(`Route ${parsedUrl.pathname} not found.`);
}

function getTasks(request, response) {
  response.setHeader('Content-Type', 'application/json');
  findTask()
    .then(data => {
      response.end(JSON.stringify(data))
    })
    .catch(error => {
      handleError(error, "controllers/task.js", "getTask")
      handleAuthResponse(response, false);
    })
}

function getOneTask(request, response) {
  response.setHeader('Content-Type', 'application/json');
  const task = request.body;
  findTaskById(task)
    .then(foundTask => {
      if (foundTask && foundTask.length > 0) {
        let info = {
          taskName: foundTask[0].taskName,
        }
        responseponse.statusCode = 200
        response.end(JSON.stringify(info));
      }
      else {
        throw new Error('Unknown task');
      }
    }).catch(error => {
      handleError(error, 'controllers/task.js', 'getOneTask');
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
      handleError(error, 'controllers/helpers.js', 'updateTaskByID');
      handleAuthResponse(response, false);
    })
}

function deleteTaskById(request, response) {
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
          handleError(err, "controllers/index.js", "deleteTaskById");
          handleAuthResponse(response, false);
        });
    });
}

function addTask(request, response) {
  // const chunks = [];
  // request
  //   .on("data", (chunk) => {
  //     chunks.push(chunk);
  //   })
  //   .on("end", () => {
  //     const task = JSON.parse(chunks.length > 0 ? chunks : "{}");
  //     console.log("check", task);
  //     insertTask(task)
  //       .then(() => {
  //         handleAuthResponse(response, true);
  //       })
  //       .catch((err) => {
  //         handleError(err, "controllers/index.js", "addTask");
  //         handleAuthResponse(response, false);
  //       });
  //   });
  const task = request.body;

  insertTask(task)
    .then(() => {
      handleAuthResponse(response, true);
    })
    .catch((err) => {
      handleError(err, "controllers/index.js", "addTask");
      handleAuthResponse(response, false);
    });

}


function signUp(request, response) {
  const chunks = []
  request
    .on('data', (chunk) => {
      chunks.push(chunk)
    })
    .on('end', () => {
      const user = JSON.parse(chunks.length > 0 ? chunks : '{}')
      insertUser(user)
        .then(() => {
          handleAuthResponse(response, true)
        })
        .catch(err => {
          handleError(err, 'controllers/index.js', 'signUp')
          handleAuthResponse(response, false)
        })
    })
}

function signIn(request, response) {
  const chunks = []
  request
    .on('data', (chunk) => {
      chunks.push(chunk)
    })
    .on('end', () => {
      const user = JSON.parse(chunks.toString())
      response.setHeader('Content-Type', 'application/json');
      verifyUser(user).then(foundUser => {
        if (!foundUser) {
          throw new Error('User not found')
        }
        const token = jwt.sign({ userId: foundUser.id },
          'RANDOM_TOKEN_SECRET', { expiresIn: '24h' }
        )
        const data = {
          token
        }
        response.end(JSON.stringify(data));
      }).catch(err => {
        handleError(err, 'controllers/index.js', 'signIn')
        response.statusCode = 404
        response.end('Username or password is not correct.')
      })
    })
}

function pingWithAuth(request, res) {
  res.end('Success')
}

module.exports = { handleNotFound, getTasks, getOneTask, addTask, editTaskById, deleteTaskById };
