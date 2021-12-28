const imageHandler = require("../handler/image")

const imageRoutes = {
    GET: {
        "/images": imageHandler.handlerGetImage,
    }
};

module.exports = imageRoutes;