const pool = require('../Util/connection');

const getUserByPhone = async (phone_number) => {
	const values = [phone_number];
	const userByPhoneQuery = `SELECT * FROM users WHERE phone_number = $1;`;

	try {
		const { rows } = await pool.query(userByPhoneQuery, values);
		if (rows.length > 0) {
			return rows;
		}
		return [];
	} catch (error) {
		console.log(error);
		return 'Error while while fetching user by phone';
	}
};

module.exports = getUserByPhone;
