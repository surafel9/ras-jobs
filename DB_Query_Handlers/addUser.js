const pool = require('../Util/connection');
const { genSalt, hash } = require('bcrypt');

const addUser = async (req) => {
	const saltRounds = 10;
	try {
		//Generate salt
		const salt = await genSalt(saltRounds);
		const password = await hash(req.body.password, salt);

		const { f_name, l_name, email, phone_number } = req.body;

		const userCreateQuery = `INSERT INTO users (f_name, l_name, email, phone_number, password) VALUES ($1,$2,$3, $4, $5) RETURNING *;`;

		const values = [f_name, l_name, email, phone_number, password];
		const { rows } = await pool.query(userCreateQuery, values);
		const newUserId = rows[0].id;

		const saltInsertQuery = `INSERT INTO salt (user_id, salt) VALUES ($1,$2) RETURNING *;`;
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
