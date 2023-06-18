const express = require('express');
const homeController = require('../controller/home');

const homeRouter = express.Router();

homeRouter.get('/', homeController);

module.exports = homeRouter;
