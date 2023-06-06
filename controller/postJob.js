const getUserByEmail = require('../DB_Query_Handlers/getUserByEmail');
const addJob = require('../DB_Query_Handlers/addJob');

const postJob = async (req, res, next) => {
	const user = await getUserByEmail(req.body.email);

	try {
		if (user[0].email === 'io4kasa@gmail.com' && user[0].is_admin == true) {
			const addedJob = await addJob(req.body);
			res.send(addedJob);
		}
		send.status(400).send('Unauthorized');
	} catch (error) {
		console.log(error);
	}
};

module.exports = postJob;
