const pool = require('../Util/connection');

const addJob = async (job) => {
	//cahing options ??
	//we could check if job is already posted by the same user
	try {
		const addJobQuery = `INSERT INTO jobs (title, salary, work_location, org_state, org_city, job_description, job_requirements, contact_email) VALUES ($1,$2,$3,$4,$5,$6, $7,$8) RETURNING *;`;
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

		//add to job_class
		const jobClassValues = [job.job_category, job_id];
		const addToJobClassQuery = `INSERT INTO job_class (job_category, job_id) VALUES ($1, $2) RETURNING *;`;
		const result = await pool.query(addToJobClassQuery, jobClassValues);
		return [result, rows];
	} catch (error) {
		console.log(error);
		throw new Error();
	}
};
module.exports = addJob;
