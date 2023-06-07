const pool = require('../Util/connection');

const deleteQuery = `DELETE FROM userprofile WHERE user_id = (SELECT id FROM users WHERE email = $1);`;

const deleteUserProfile = async (user) => {
	const { email } = user;
	const values = [email];

	try {
		await pool.query(deleteQuery, values);
	} catch (error) {
		console.log(error);
	}
};

module.exports = deleteUserProfile;
