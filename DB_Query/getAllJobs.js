const pool = require('../Util/connection');

const allJobsQuery = `SELECT * FROM jobs;`;
const cahch = {};

const getAllJobs = async () => {
	try {
		if (!cahch.rows) {
			const { rows } = await pool.query(allJobsQuery);

			cahch.rows = rows;
			return rows;
		}
		return cahch.rows;
	} catch (error) {
		throw new Error(error);
	}
};

module.exports = getAllJobs;
