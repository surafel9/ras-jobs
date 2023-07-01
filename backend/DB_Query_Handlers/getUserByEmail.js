const pool = require('../Util/connection');
const emailQuery = `SELECT * FROM users WHERE email = $1`;
const cache = {};
const getUserByEmail = async (email) => {
	const values = [email];
	try {
		if (
			!cache.rows ||
			cache.rows.length === 0 ||
			cache.rows[0].email !== email
		) {
			const { rows } = await pool.query(emailQuery, values);

			if (rows.length > 0) {
				cache[email] = rows;

				return rows;
			}
		}
		if (cache[email]) {
			return cache[email];
		}
		return [];
	} catch (error) {
		//console.log(error);
		return 'Error while fetching user';
	}
};

module.exports = getUserByEmail;
