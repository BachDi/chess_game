const taskRoutes = require("./task");
const imageRoutes = require("./image");

const routes = {
    task: taskRoutes,
    image: imageRoutes,
};

module.exports = routes;