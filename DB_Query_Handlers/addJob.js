const pool = require('../Util/connection');

const addJob = async (jobs) => {
	try {
		const results = [];

		for (const job of jobs.job) {
			const addJobQuery = `INSERT INTO jobs (title, salary, work_location, org_state, org_city, job_description, job_requirements, contact_email) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`;
			const {
				title,
				salary,
				work_location,
				org_state,
				org_city,
				job_description,
				job_requirements,
				contact_email,
			} = job;
			const values = [
				title,
				salary,
				work_location,
				org_state,
				org_city,
				job_description,
				job_requirements,
				contact_email,
			];

			const { rows } = await pool.query(addJobQuery, values);
			const job_id = rows[0].id;

			// Add to job_class
			const jobClassValues = [job.job_category, job_id];
			const addToJobClassQuery = `INSERT INTO job_class (job_category, job_id) VALUES ($1, $2) RETURNING *;`;
			const result = await pool.query(addToJobClassQuery, jobClassValues);

			results.push([result, rows]);
		}

		return results;
	} catch (error) {
		console.log(error);
		throw new Error('Error adding jobs');
	}
};

module.exports = addJob;
