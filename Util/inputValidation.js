const { body, validationResult } = require('express-validator');

const validateUserData = [
	body('f_name').notEmpty().withMessage('First name is required'),
	body('l_name').notEmpty().withMessage('Last name is required'),
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
	body('phone_number').isNumeric().withMessage('Invalid phone number'),
];

const validateJobPostingData = [
	body('catagory').notEmpty().isLength({ max: 20 }),
	body('job_title').notEmpty().isLength({ max: 20 }),
	body('work_location').notEmpty().isLength({ max: 50 }),
	body('organization_location').notEmpty().isLength({ max: 50 }),
	body('contact_email').isEmail().withMessage('Please provide contact email'),
	body('contact_phone')
		.notEmpty()
		.withMessage('Please provide contact phone'),
	body('job_description')
		.notEmpty()
		.withMessage('Please provide job description'),
	body('job_description')
		.notEmpty()
		.withMessage("Job description can't be empty"),
];

const validate = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	next();
};

module.exports = { validateUserData, validateJobPostingData, validate };
