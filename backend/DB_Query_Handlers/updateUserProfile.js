const pool = require('../Util/connection');
const userProfileQuery = `UPDATE userprofile
SET  title = $1, work_experiance = $2, skills = $3, projects = $4,
    social = $5, education = $6, certificates = $7, saved_job = $8, applied_job = $9
WHERE user_id = $10
RETURNING *;
`;
const updateUserProfile = async (user) => {
	try {
		const {
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
		const user_id = user.user_id;
		const values = [
			title,
			work_experiance,
			skills,
			projects,
			social,
			education,
			certificates,
			saved_job,
			applied_job,
			user_id,
		];

		const { rows } = pool.query(userProfileQuery, values);
		return rows;
	} catch (error) {
		console.log(error);
	}
};
module.exports = updateUserProfile;
