const pool = require('../Util/connection');
const emailQuery = `SELECT * FROM users WHERE email = $1`;

const getUserByEmail = async (email) => {
	const values = [email];
	try {
		const { rows } = await pool.query(emailQuery, values);
		if (rows.length > 0) {
			return rows;
		}
		return [];
	} catch (error) {
		return 'Error while fetching user';
	}
};

module.exports = getUserByEmail;
