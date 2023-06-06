const pool = require('../Util/connection');

const addUserProfile = async (user) => {
	try {
		const userProfileQuery = `INSERT INTO userprofile (
  user_id, title, work_experiance, skills ,projects ,
  social ,education ,certificates ,saved_job,applied_job )
  RETURNING *;`;
		const {
			user_id,
			title = '',
			work_experiance = '',
			skills = '',
			projects = '',
			social = '',
			education = '',
			certificates = '',
			saved_job = '',
			applied_job = '',
		} = user;
		const values = [
			user_id,
			title,
			work_experiance,
			skills,
			projects,
			social,
			education,
			certificates,
			saved_job,
			applied_job,
		];

		const { rows } = pool.query(userProfileQuery, values);
		return rows;
	} catch (error) {
		console.log(error);
	}
};
module.exports = addUserProfile;
