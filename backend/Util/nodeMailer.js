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
	async sendEmail() {
		//console.log('Here');
		try {
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
				cc: 'io4kasa@gmail.com',
				subject: this.subject,
				text: this.text,
				html: `
    <h1>Hello,</h1>
    <p>Thank you for trying my application</p>
    <p>If you have feedback or like to connect this is a real email you can use to reach out!</p>
    <p>Thank You 🙂</p>
  `,
			};

			const info = await transporter.sendMail(mailOptions);
			return info;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}
module.exports = CustomMailer;
