const express = require('express');

const loginController = require('../controllers/login.controller');
const userController = require('../controllers/user.controller');
const categoryController = require('../controllers/category.controller');

const loginMiddleware = require('../middlewares/login.middleware');
const userMiddleware = require('../middlewares/user.middleware');
const categoryMiddleware = require('../middlewares/category.middleware');

const route = express.Router();

route.post('/login', loginMiddleware.verifier, loginController.loginUser);
route.post('/user', userMiddleware.verifier, userController.postUser);
route.get('/user', userController.getUsers);
route.get('/user/:id', userController.getUserById);
route.post('/categories', categoryMiddleware.verifier, categoryController.postCategory);

module.exports = route;
