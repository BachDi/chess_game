// const { Task } = require("../repository");
const crypto = require('crypto');
const { taskModel } = require("../models");
const { userModel } = require("../models");

//----Task----//

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

function updateTask(taskId, task) {
  return taskModel.findByIdAndUpdate(taskId, task);
}

function findTaskById(taskId) {
  return taskModel.findById(taskId);
}


function handleAuthResponse(response, isSuccessful = false) {
  const data = {
    status: isSuccessful ? "success" : "fail",
  };
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify(data));
}

//----User----//

function insertUser(user) {
  const password = user.password ? hashPassword(user.password) : undefined
  const newUser = {
    username: user.username,
    password: password,
    tasks: user.tasks,
    isAdmin: user.isAdmin,
  };
  console.log(newUser);
  return userModel.create(newUser);
}

function findUsers(user = {}) {
  return userModel.find(user);
}

function updateUser(userId, user) {
  return userModel.findByIdAndUpdate(userId, user);
}

function findUserById(userId) {
  return userModel.findById(userId);
}

function hashPassword(password) {
  // const hmac = crypto.createHmac('sha256', 'Sup3r_s3cr3t_k3yyyy');
  const hash = crypto.createHash("sha256");
  return hash.update(password).digest("hex");
}

function validateUser(user) {
  return userModel.find({ username: user.username, password: hashPassword(user.password) });
}

function verifyUser(user) {
  return {
    username: user.username,
    password: user.password,
    isAdmin: (user.isAdmin === 'true') ? true : false,
    isDeleted: (user.isDeleted === 'true') ? true : false,
  }
}

module.exports = {
  findTasks,
  insertTask,
  updateTask,
  findTaskById,
  handleAuthResponse,
  findUsers,
  insertUser,
  updateUser,
  findUserById,
  validateUser,
  verifyUser,
};
