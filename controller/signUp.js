const getUserByEmail = require('../DB_Query_Handlers/getUserByEmail');
const getUserByPhone = require('../DB_Query_Handlers/getUserByPhone');
const addUser = require('../DB_Query_Handlers/addUser');
const subscribeToSignUp = require('./manageProfile');

const signUp = async (req, res, next) => {
	const userByEmail = await getUserByEmail(req.body.email);
	const userByPhone = await getUserByPhone(req.body.phone_number);
	//check user email and phone number from db
	//register user to db or reject
	try {
		if (userByEmail.length > 0 || userByPhone.length > 0) {
			res.status(303).send(
				'There is already registred account with that information'
			);
		}
		const result = await addUser(req);
		subscribeToSignUp(result);
		res.status(200).send(result);
	} catch (error) {
		throw new Error();
	}

	//invite user to create profile
	//next();
};

module.exports = signUp;
