const express = require('express');
const manageProfileRouter = express.Router();
const manageProfile = require('../controller/manageProfile');

manageProfileRouter.get('/', manageProfile.getProfile);
manageProfileRouter.post('/', manageProfile.createProfile);
manageProfileRouter.delete('/', manageProfile.deleteProfile);

module.exports = manageProfileRouter;
