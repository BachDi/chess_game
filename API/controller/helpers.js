// const { Task } = require("../repository");
const crypto = require('crypto');
const { taskModel } = require("../models");

function findTasks(task = {}) {
  return taskModel.find(task);
}

function insertTask(task) {
  const newTask = {
    taskName: task.taskName,
    isDone: false,
    isDeleted: false,
  };
  console.log(newTask);
  return taskModel.create(newTask);
}

function updateTask(taskID, task) {
  return taskModel.findByIdAndUpdate(taskID, task);
}

function findTaskById(taskID) {
  return taskModel.findById(taskID);
}


function handleAuthResponse(response, isSuccessful = false) {
  const data = {
    status: isSuccessful ? "success" : "fail",
  };
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify(data));
}


function hashPassword(password) {
  // const hmac = crypto.createHmac('sha256', 'Sup3r_s3cr3t_k3yyyy');
  const hash = crypto.createHash("sha256");
  return hash.update(password).digest("hex");
}

function verifyUser(checkingUser) {
  return userRepository
    .find()
    .then((users) =>
      (users || []).find(
        (user) =>
          user.username === checkingUser.username &&
          user.password === hashPassword(checkingUser.password)
      )
    );
}

module.exports = {
  findTasks,
  insertTask,
  updateTask,
  findTaskById,
  handleAuthResponse,
  verifyUser,
};
