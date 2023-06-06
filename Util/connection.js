require('dotenv').config();
const { Pool } = require('pg');
/*
const pool = new Pool({
	user: process.env.DB_USER,
	host: process.env.DB_HOST,
	database: process.env.DB_DATABASE,
	password: process.env.DB_PASSWORD,
	port: process.env.DB_PORT,
}); */

// Create a new pool with the connection details
const pool = new Pool({
	connectionString: process.env.CONNECTION_STRING,
});

module.exports = pool;
