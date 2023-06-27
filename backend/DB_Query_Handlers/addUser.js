const pool = require('../Util/connection');
const { genSalt, hash } = require('bcrypt');

const addUser = async (req) => {
	const saltRounds = 10;
	try {
		//Generate salt
		const salt = await genSalt(saltRounds);
		const password = await hash(req.body.accessFormData.password, salt);

		const email = req.body.accessFormData.email;

		const userCreateQuery = `INSERT INTO users ( email,  password) VALUES ($1,$2) RETURNING *;`;

		const values = [email, password];
		const { rows } = await pool.query(userCreateQuery, values);

		const newUserId = rows[0].id;

		const saltInsertQuery = `INSERT INTO salt (user_id, salted) VALUES ($1,$2) RETURNING *;`;
		const saltVals = [newUserId, salt];
		await insertSaltedPassword(saltInsertQuery, saltVals);

		return rows;
	} catch (error) {
		return error;
	}
};

const insertSaltedPassword = async (saltInsertQuery, values) => {
	try {
		await pool.query(saltInsertQuery, values);
		//console.log('Salted password inserted successfully');
	} catch (error) {
		//console.error('Error inserting salted password:', error);
		throw error;
	}
};

const checkSalt = async (rows) => {
	//check bycript
};

module.exports = addUser;
