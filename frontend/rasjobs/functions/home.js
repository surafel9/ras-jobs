const getAllJobs = require('./getAllJobs');

exports.handler = async (event, context) => {
	const data = await getAllJobs();
	if (data.length !== 0) {
		return {
			statusCode: 200,
			body: data,
		};
	} else {
		return {
			statusCode: 500,
			body: 'Internal Server Error',
		};
	}
};
