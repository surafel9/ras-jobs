import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuthCard from './auth/authCard';

export default function Login({ className }) {
	const [accessChoice, setAccessChoice] = useState('Log In');
	const [accessFormData, setAccessFormData] = useState({
		email: '',
		password: '',
	});
	const [emailSuccess, setEmailSuccess] = useState(false);

	const handleAccessChoice = (arg) => {
		setAccessChoice(arg);
	};

	const handleAuthorization = (to, subject, text) => {
		//handle mailing in the backend!
	};

	const signUp = async () => {
		//to, subject and text must be passed to the query
		try {
			const response = await axios.post(
				'http://localhost:3001/signUp',
				accessFormData,
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
			if (response.ok) {
				const data = await response.json();
				console.log(data);
				//setSuccesss(true)
			} else {
				throw new Error('Fixing the issue right away');
			}
		} catch (error) {
			console.log(error);
		}
	};

	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		setAccessFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
	};

	return (
		<div className={className}>
			<div className='welcome-info'></div>
			<div className='welcome-info-login'>
				{' '}
				<AuthCard
					accessChoice={accessChoice}
					handleAccessChoice={handleAccessChoice}
					handleAuthorization={handleAuthorization}
					handleSignUp={signUp}
					accessFormData={accessFormData}
					onChangeHandler={onChangeHandler}
					onSubmitHandler={onSubmitHandler}
				/>
			</div>

			<div className='welcome-info-b'></div>
		</div>
	);
}
