const url = require("url");
const { handleError } = require("../helpers");
const { handleAuthResponse } = require("../repository/helpers");

const {
    findUsers,
    insertUser,
    updateUser,
    findUserById,
    validateUser,
    verifyUser,
} = require("./helpers");

function handleNotFound(request, response) {
    const parsedUrl = url.parse(request.url, true);
    response.statusCode = 404;
    response.end(`Route ${parsedUrl.pathname} not found.`);
}

function signUp(request, response) {
    const user = request.body;
    insertUser(user)
        .then(() => {
            handleAuthResponse(response, true)
        })
        .catch(error => {
            handleError(error, 'controllers/user.js', 'signUp')
            handleAuthResponse(response, false)
        })
}

function getUsers(request, response) {
    response.setHeader('Content-Type', 'application/json');
    findUsers()
        .then(data => {
            response.end(JSON.stringify(data))
        })
        .catch(error => {
            handleError(error, "controllers/user.js", "getUsers")
            handleAuthResponse(response, false);
        })
}

function getUserById(request, response) {
    response.setHeader('Content-Type', 'application/json');
    const userId = request.body;
    findUserById(userId)
        .then(foundUser => {
            if (foundUser) {
                let info = {
                    _id: foundUser._id,
                    username: foundUser.username,
                    tasks: foundUser.isDone,
                    isAdmin: foundUser.isAdmin,
                    isDeleted: foundUser.isDeleted
                }
                response.statusCode = 200
                response.end(JSON.stringify(info));
            }
            else {
                throw new Error('Unknown user');
            }
        }).catch(error => {
            handleError(error, 'controllers/user.js', 'getUserById');
            handleAuthResponse(response, false);
        })
}

function editUserById(request, response) {
    const user = request.body;
    const userId = user._id;
    updateUser(userId, user)
        .then(() => {
            handleAuthResponse(response, true)
        }).catch(error => {
            handleError(error, 'controllers/user.js', 'editUserByID');
            handleAuthResponse(response, false);
        })
}

function deleteUserById(request, response) {
    let user = request.body;
    const userId = user._id;
    findUserById(userId).then(foundUser => {
        debugger;
        if (foundUser) {
            foundUser.isDeleted = true;
            updateUser(userId, foundUser).then(() => {
                handleAuthResponse(response, true);
            })
        }
        else {
            handleAuthResponse(response, false)
        }
    }).catch(error => {
        handleError(error, 'controllers/Users.js', 'deleteUserByID');
        handleAuthResponse(response, false);
    })
}

module.exports = { signUp, getUsers, getUserById, editUserById, deleteUserById }