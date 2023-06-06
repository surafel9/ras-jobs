const getUserByEmail = require('../DB_Query_Handlers/getUserByEmail');
const getUserQuery = `SELECT *
FROM userprofile
INNER JOIN users ON userprofile.user_id = users.id
WHERE users.id = $1;


`;
const userProfileCache = {};
const getUserProfileByEmail = async (user) => {
	try {
		const user_id = user.id;
		const values = [user_id];
		if (
			!userProfileCache.rows ||
			userProfileCache.rows.length === 0 ||
			userProfileCache.rows[0].email !== user.email
		) {
			const userProfile = await getUserByEmail(values, getUserQuery);
			userProfileCache.rows = userProfile;
			return userProfile;
		}
	} catch (error) {
		console.log(error);
		throw new Error();
	}
};

module.exports = getUserProfileByEmail;
