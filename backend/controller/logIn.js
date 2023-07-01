const getUserByEmail = require('../DB_Query_Handlers/getUserByEmail');
const bcrypt = require('bcrypt');

const logIn = async (req, res, next) => {
	try {
		const user = await getUserByEmail(req.body.accessFormData.email);
		//console.log(user);
		if (user.length === 0) {
			// User not found
			res.status(401).json('Unauthorized');
			return;
		}

		const hash = user[0].password;

		bcrypt.compare(
			req.body.accessFormData.password,
			hash,
			function (err, result) {
				if (err) {
					// Error comparing passwords
					res.status(500).json('Password was not right!');
					return;
				}

				if (result) {
					// Passwords match, user is authenticated
					res.status(200).json(user);
					return;
				} else {
					// Passwords do not match
					res.status(401).json('Unauthorized');
					return;
				}
			}
		);
	} catch (error) {
		//console.log(error);
		res.status(500).json('Internal Server Error');
		return;
	}
};

module.exports = logIn;
