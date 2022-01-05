const imageHandler = require("../controller/image");

const imageRoutes = {
  GET: {
    "/images": imageHandler.handlerGetImage,
  },
};

module.exports = imageRoutes;
