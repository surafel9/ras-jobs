const express = require('express');
const inputValidation = require('../Util/inputValidation');
const login = require('../controller/logIn');

const logInRouter = express.Router();

logInRouter.post(
	'',

	inputValidation.validateLogInData,
	inputValidation.validate,
	login
);

module.exports = logInRouter;
