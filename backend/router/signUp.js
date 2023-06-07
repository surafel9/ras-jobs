const express = require('express');
const inputValidation = require('../Util/inputValidation');
const signUp = require('../controller/signUp');

const signUpRouter = express.Router();

signUpRouter.use(
	'',
	inputValidation.validateUserData,
	inputValidation.validate,
	signUp
);

module.exports = signUpRouter;
