require('dotenv').config();
const jwt = require('jsonwebtoken');
const getUserByEmail = require('../DB_Query_Handlers/getUserByEmail');
const getUserByPhone = require('../DB_Query_Handlers/getUserByPhone');
const addUser = require('../DB_Query_Handlers/addUser');
const subscribeToSignUp = require('./manageProfile');
const CustomMailer = require('../Util/nodeMailer');

const signUp = async (req, res, next) => {
	const userByEmail = await getUserByEmail(req.body.email);
	console.log(req.body);
	console.log(userByEmail);
	//const userByPhone = await getUserByPhone(req.body.phone_number);
	//check user email and phone number from db
	//register user to db or reject

	try {
		/* if (userByEmail.length > 0) {
			console.log(userByEmail);
			res.status(303).send(
				'There is already registred account with that information'
			); */

		const { to, subject, text } = req.body;
		const userName = process.env.USER_NAME;
		const password = process.env.PASSWORD;
		const newMailer = new CustomMailer(
			userName,
			password,
			'to',
			'Subject',
			'text'
		);
		//console.log(newMailer);
		//await newMailer.sendEmail();

		const result = await addUser(req);
		//use Result to create JWT token

		//console.log(result);
		const token = jwt.sign({ userId: result.id }, process.env.SECERET_KEY, {
			expiresIn: '1h',
		});
		//subscribeToSignUp(result);
		//console.log(token);
		res.status(200).json({ token });

		//userName, password, to, subject, text
	} catch (error) {
		console.log(error);
		throw new Error(error);
	}

	//invite user to create profile
	//next();
};

module.exports = signUp;
