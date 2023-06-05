const getUserByEmail = require('../DB_Query/getUserByEmail');
const getUserByPhone = require('../DB_Query/getUserByPhone');
const insertUser = require('../DB_Query/insertUser');

const signUp = async (req, res, next) => {
	const userByEmail = await getUserByEmail(req.body.email);
	const userByPhone = await getUserByPhone(req.body.phone_number);
	//check user email and phone number from db
	//register user to db or reject
	try {
		if (userByEmail.length > 0 || userByPhone.length > 0) {
			console.log(userByEmail);
			console.log(userByPhone);
			res.status(303).send(
				'There is already registred account with that information'
			);
		}
		const result = await insertUser(req);
		res.status(200).send(result);
	} catch (error) {}

	//invite user to create profile
	next();
};

module.exports = signUp;
