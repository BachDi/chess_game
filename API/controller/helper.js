// const { Task } = require("../repository");
const { Task } = require("../models/task");

function findTask() {
  return Task.find();
}

function insertTask(task) {
  const newTask = {
    taskName: task.taskName,
    isDone: false,
    isDeleted: false,
  };
  console.log(newTask);
  return Task.create(newTask);
}

function updateTask(task) {
  return Task.updateOne(task);
}

function removeTask(task) {
  return Task.remove(task);
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

function handleAuthResponse(response, isSuccessful = false) {
  const data = {
    status: isSuccessful ? "success" : "fail",
  };
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify(data));
}

module.exports = {
  findTask,
  insertTask,
  updateTask,
  removeTask,
  handleAuthResponse,
};
