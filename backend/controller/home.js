const getAllJobs = require('../DB_Query_Handlers/getAllJobs');

const homeController = async (req, res, next) => {
	const data = await getAllJobs();
	if (data.length !== 0) {
		await res.status(201).json(data);

		next();
	} else {
		res.status(500).json(
			'We are having some technical difficulties and we are working to resolve it ASAP'
		);
	}
	//restart the app or check db connections to fix the issue
	//send notification for technical person
};

module.exports = homeController;
