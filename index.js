const express = require('express');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const homeRouter = require('./router/home');
const signUpRouter = require('./router/signUp');
const app = express();
// load the cookie-parsing middleware
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
//disabling fingerprinting
app.disable('x-powered-by');

const port = process.env.PORT || 3000;

app.use((req, res, next) => {
	/* console.log({
		reqParams: req.params,
		reqBody: req.body,
	}); */
	next();
});

app.use('/', homeRouter);
app.use('/signUp', signUpRouter);
app.listen(port, () => {
	console.log(`App running at port : ${port}`);
});
