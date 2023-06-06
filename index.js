const express = require('express');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const homeRouter = require('./router/home');
const signUpRouter = require('./router/signUp');
const logInRouter = require('./router/logIn');

const pool = require('./Util/connection');
const postJobRouter = require('./router/postJob');
const app = express();
// load the cookie-parsing middleware
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
//disabling fingerprinting
app.disable('x-powered-by');

const port = process.env.PORT || 3000;

// Test the connection
pool.query('SELECT NOW()', (err, res) => {
	if (err) {
		console.error('Error connecting to ElephantSQL:', err);
	} else {
		console.log('Connected to ElephantSQL:', res.rows[0].now);
	}
});

app.use((req, res, next) => {
	/* console.log({
		reqParams: req.params,
		reqBody: req.body,
	}); */
	next();
});

//mount routers
app.use('/', homeRouter);
app.use('/signUp', signUpRouter);
app.use('/logIn', logInRouter);
app.use('/postJob', postJobRouter);

app.listen(port, () => {
	console.log(`App running at port : ${port}`);
});
