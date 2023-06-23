const pool = require('../Util/connection');

const allJobsQuery = `SELECT j.id, j.title, j.job_description
, j.job_requirements, j.org_city, j.org_state, j.salary, j.work_location, jc.job_category
FROM jobs j
INNER JOIN job_class jc ON j.id = jc.job_id;`;
const cache = {};

const getAllJobs = async () => {
	try {
		if (!cache.rows) {
			const { rows } = await pool.query(allJobsQuery);
			//console.log(rows);
			cache.rows = rows;
			return rows;
		}
		return cache.rows;
	} catch (error) {
		throw new Error(error);
	}
};

module.exports = getAllJobs;
