const express = require('express');

const loginController = require('../controllers/login.controller');
const userController = require('../controllers/user.controller');
const loginMiddleware = require('../middlewares/login.middleware');
const userMiddleware = require('../middlewares/user.middleware');

const route = express.Router();

route.post('/login', loginMiddleware.verifier, loginController.loginUser);
route.post('/user', userMiddleware.verifier, userController.postUser);
route.get('/user', userController.getUsers);
route.get('/user/:id', userController.getUserById);

module.exports = route;
