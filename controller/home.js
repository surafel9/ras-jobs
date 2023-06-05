const getAllJobs = require('../DB_Query/getAllJobs');
const homeController = async (req, res) => {
	const result = await getAllJobs();
	if (result.length !== 0) {
		res.status(201).send(result);
	} else {
		res.status(500).send(
			'We are having some technical difficulties and we are working to resolve it ASAP'
		);
	}
	//restart the app or check db connections to fix the issue
	//send notification for technical person
};

module.exports = homeController;
