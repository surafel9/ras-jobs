const addUserProfile = require('../DB_Query_Handlers/addUserProfile');
const deleteUserProfile = require('../DB_Query_Handlers/deleteUserProfile');
const getUserProfileByEmail = require('../DB_Query_Handlers/getUserByEmail');
const updateUserProfile = require('../DB_Query_Handlers/updateUserProfile');
//subscribe to signup
const newUser = {};

const subscribeToSignUp = (user) => {
	newUser.rows = user;
	return null;
};
//create profile

const createProfile = async (req, res) => {
	//check if the user exists in user profile
	try {
		const userProfile = await getUserProfileByEmail(newUser);
		if (userProfile.length > 0) {
			//update
			const update = await updateUserProfile(userProfile);
			res.status(200).json(update);
		}

		const update = await addUserProfile(newUser);
		res.status(200).json(update);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: 'Error creating user profile' });
	}
};

const deleteProfile = async (req, res) => {
	try {
		const user = await getUserProfileByEmail(newUser);
		if (user.length > 0) {
			await deleteUserProfile(newUser);
			res.status(203).json([]);
		} else {
			throw new Error('User not found');
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: 'Error deleting user profile' });
	}
};

const getProfile = async (req, res) => {
	try {
		const user = await getUserProfileByEmail(newUser);
		res.status(200).json(user);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: 'Error getting user profile' });
	}
};

module.exports = {
	subscribeToSignUp,
	createProfile,
	deleteProfile,
	getProfile,
};
