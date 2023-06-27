const { body, validationResult } = require('express-validator');

const validateUserData = [
	body('email').isEmail().withMessage('Invalid email address'),
	body('password')
		.notEmpty()
		.withMessage('Password is required')
		.isLength({ min: 8 })
		.withMessage('Password must be at least 8 characters long')
		.matches(/\d/)
		.withMessage('Password must contain at least one digit')
		.matches(/[a-z]/)
		.withMessage('Password must contain at least one lowercase letter')
		.matches(/[A-Z]/)
		.withMessage('Password must contain at least one uppercase letter')
		.matches(/[!@#$%^&*]/)
		.withMessage(
			'Password must contain at least one special character (!@#$%^&*)'
		),
];
const validateLogInData = [
	body('email').isEmail().withMessage('Please enter a valid email address'),
	body('password').notEmpty().withMessage("Password can't be empty"),
];
const validateJobPostingData = [
	body('job_category').notEmpty().isLength({ max: 20 }),
	body('title').notEmpty().isLength({ max: 20 }),
	body('salary').notEmpty().isLength({ max: 20 }),
	body('work_location').notEmpty().isLength({ max: 50 }),
	body('org_state').notEmpty().isLength({ max: 50 }),
	body('org_city').notEmpty().isLength({ max: 50 }),
	body('contact_email').isEmail().withMessage('Please provide contact email'),
	body('job_description')
		.notEmpty()
		.withMessage('Please provide job description'),
	body('job_description')
		.notEmpty()
		.withMessage("Job description can't be empty"),
];

const validate = (req, res, next) => {
	const errors = validationResult(req.body.accessFormData);
	//console.log(errors, req.body.accessFormData);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	next();
};

module.exports = {
	validateUserData,
	validateLogInData,
	validateJobPostingData,

	validate,
};
