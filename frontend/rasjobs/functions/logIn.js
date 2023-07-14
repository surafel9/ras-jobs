const getUserByEmail = require('../DB_Query_Handlers/getUserByEmail');
const bcrypt = require('bcrypt');

exports.handler = async (event, context) => {
	try {
		const { email, password } = JSON.parse(event.body);
		const user = await getUserByEmail(email);
		//console.log(user);
		if (user.length === 0) {
			// User not found
			return {
				statusCode: 401,
				body: 'Unauthorized',
			};
		}

		const hash = user[0].password;

		const result = await bcrypt.compare(password, hash);

		if (result) {
			// Error comparing passwords
			return {
				statusCode: 200,
				body: JSON.stringify(user),
			};
		} else {
			return {
				statusCode: 401,
				body: 'Unauthorized',
			};
		}
	} catch (error) {
		//console.log(error);
		return {
			statusCode: 500,
			body: 'Internal Server Error',
		};
	}
};
