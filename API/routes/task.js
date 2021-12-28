const taskHandler = require("../handler/task")

const taskRoutes = {
    GET: {
        "/tasks": taskHandler.handlerGetTask,
        // "/image": handlerGetTask,
    },
    DELETE: {
        "/tasks": taskHandler.handlerDeleteTask,
    },
    POST: {
        "/tasks": taskHandler.handlerCreateTask,
    },
    PUT: {
        "/tasks": taskHandler.handlerUpdateTask,
    },
    PATCH: {
        "/tasks": taskHandler.handlerUpdateTask,
    },
};

module.exports = taskRoutes;