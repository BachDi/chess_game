const fs = require('fs');

const taskHandler = {
    handlerGetTask,
    handlerCreateTask,
    handlerDeleteTask,
    handlerUpdateTask
}

function handlerGetTask(req, res) {
    if (req.url.search("tasks/:") !== -1) {
        res.setHeader("Content-Type", "application/json");
        const startLetter = req.url.search(":");
        const id = req.url.slice(startLetter + 1, req.url.length);
        tasks.forEach((task) => {
            if (task.id === Number(id)) {
                return res.end(JSON.stringify(task));
            }
        });
        return res.end(JSON.stringify(tasks));
    } 
}

function handlerDeleteTask(req, res) {
    if (req.method === "DELETE") {
        if (req.url.search("tasks/:") !== -1) {
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
}

function handlerCreateTask(req, res) {
    if (req.method === "POST") {
        if (req.url === "/tasks") {
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
    }
}

function handlerUpdateTask(req, res) {
    if (req.method === "PATCH") {
        if (req.url.search("tasks/:") !== -1) {
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
}

module.exports = taskHandler;