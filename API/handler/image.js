const fs = require("fs")

const imageHandler = {
    handlerGetImage
}

function handlerGetImage(req, res) {
    if (req.url === "/image") {
        fs.readFile("img/hinh1.jpg", (err, data) => {
            if (err) {
                res.writeHead(404);
                res.write("File not found");
            } else {
                res.writeHead(200, { "Content-Type": "image/jpeg" });
                return res.end(data);
            }
        });
    }
}

module.exports = imageHandler;