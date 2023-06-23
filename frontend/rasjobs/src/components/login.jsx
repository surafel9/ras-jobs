import React, { useState, useEffect } from 'react';

import AuthCard from './auth/authCard';

export default function Login({ className }) {
	const [accessChoice, setAccessChoice] = useState('Log In');

	const handleAccessChoice = (arg) => {
		setAccessChoice(arg);
	};

	const handleAuthorization = (to, subject, text) => {
		//handle mailing in the backend!
	};

	const signUp = () => {
		//to, subject and text must be passed to the query
	};
	return (
		<div className={className}>
			<div className='welcome-info'></div>
			<div className='welcome-info-login'>
				{' '}
				<AuthCard
					accessChoice={accessChoice}
					setAccessChoice={setAccessChoice}
					handleAccessChoice={handleAccessChoice}
					handleAuthorization={handleAuthorization}
					handleSignUp={signUp}
				/>
			</div>

			<div className='welcome-info-b'></div>
		</div>
	);
}
