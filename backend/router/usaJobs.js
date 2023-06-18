const express = require('express');
const getUSAJOBS = require('../controller/usaJobs');

const usaJobsRouter = express.Router();

usaJobsRouter.get('/', getUSAJOBS);
module.exports = usaJobsRouter;
