const express = require('express');
const validateJobsData = require('../Util/inputValidation');
const postJob = require('../controller/postJob');

const postJobRouter = express.Router();

postJobRouter.post(
	'',
	//validateJobsData.validateJobPostingData,
	//validateJobsData.validate,
	postJob
);

module.exports = postJobRouter;
