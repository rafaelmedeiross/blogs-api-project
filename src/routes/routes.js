const express = require('express');
const loginController = require('../controllers/login.controller');
const loginMiddleware = require('../middlewares/login.middleware');

const route = express.Router();

route.post('/login', loginMiddleware.verifier, loginController.loginUser);

module.exports = route;
