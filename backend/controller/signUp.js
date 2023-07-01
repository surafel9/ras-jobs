require('dotenv').config();
const jwt = require('jsonwebtoken');
const getUserByEmail = require('../DB_Query_Handlers/getUserByEmail');
const getUserByPhone = require('../DB_Query_Handlers/getUserByPhone');
const addUser = require('../DB_Query_Handlers/addUser');
const subscribeToSignUp = require('./manageProfile');
const CustomMailer = require('../Util/nodeMailer');

const signUp = async (req, res, next) => {
	const userByEmail = await getUserByEmail(req.body.accessFormData.email);
	console.log(userByEmail);
	try {
		if (userByEmail.length > 0) {
			res.status(303).send(
				'There is already registred account with that information'
			);
			return;
		}
		console.log('here');

		//const { to, subject, text } = req.body;
		const userName = process.env.USER_NAME;
		const password = process.env.PASSWORD;
		const newMailer = new CustomMailer(
			userName,
			password,
			req.body.accessFormData.email,
			'Sign UP Confirmation: From Ras - Jobs',
			'Thank you for signing up with Ras Jobs!'
		);

		await newMailer.sendEmail();

		const result = await addUser(req);

		const token = jwt.sign({ userId: result.id }, process.env.SECERET_KEY, {
			expiresIn: '1h',
		});

		res.status(200).json(token);
	} catch (error) {
		return res.status(500).json('Internal Server Error');
	}

	//invite user to create profile
	//next();
};

module.exports = signUp;
