const nodemailer = require('nodemailer');

//constructor(userName, password, to, subject, text);
//const customMailer = new CustomMailer();
class CustomMailer {
	constructor(userName, password, to, subject, text) {
		this.userName = userName;
		this.password = password;
		this.to = to;
		this.subject = subject;
		this.text = text;
	}
	async sendMail() {
		console.log('Here');
		/* try {
			const transporter = nodemailer.createTransport({
				service: 'gmail',
				auth: {
					user: this.userName,
					pass: this.password,
				},
			});

			const mailOptions = {
				from: this.userName,
				to: this.to,
				subject: this.subject,
				text: this.text,
			};

			const info = await transporter.sendMail(mailOptions);
			return info;
		} catch (error) {
			console.log(error);
			throw error;
		} */
	}
}
module.exports = CustomMailer;
