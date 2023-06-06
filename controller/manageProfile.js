const getUserProfileByEmail = require('../DB_Query_Handlers/getUserByEmail');

//subscribe to signup
const newUser = {};

const subscribeToSignUp = (user) => {
	newUser[rows] = user;
	return null;
};
//create profile

const createProfile = async (user) => {
	//check if the user exists in user profile

	const userProfile = await getUserProfileByEmail(user);
	if (userProfile.rows) {
		//update
	}
	//if so call update profile
	//else call add user profile
};
//update profile
//delete profile
//read profile

module.exports = subscribeToSignUp;
