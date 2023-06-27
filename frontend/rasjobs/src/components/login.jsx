import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { SIGN_UP, LOG_IN, LOG_OUT } from '../store/types';

import AuthCard from './auth/authCard';
import { loginHandler } from '../util/handleLogIn';
import { signUpHandler } from '../util/handleSignUp';
import { useAuth } from './authProvide';

export default function Login({ className }) {
	const [accessChoice, setAccessChoice] = useState('Log In');
	const [token, setToken] = useState(null);
	const { state, dispatch } = useAuth();
	const [error, setError] = useState(false);

	const [accessFormData, setAccessFormData] = useState({
		email: '',
		password: '',
	});
	const [signupSuccess, setSignUpSuccess] = useState({
		isSuccess: false,
		shouldRedirect: false,
	});
	const navigate = useNavigate();

	const handleAccessChoice = (arg) => {
		setAccessChoice(arg);
	};

	const auth = async (e) => {
		//to, subject and text must be passed to the query
		e.preventDefault();
		let response;
		try {
			if (e.target.name === 'Log In') {
				response = await loginHandler(accessFormData);
			} else {
				response = await signUpHandler(accessFormData);
			}

			if (response.status === 200 || response.statusText === 'OK') {
				const { token } = response.data;

				sessionStorage.setItem('token', token);
				setToken(token);
				setSignUpSuccess((prevState) => ({
					...prevState,
					isSuccess: true,
				}));
				dispatch({
					type: e.target.name === 'Log In' ? LOG_IN : SIGN_UP,
					payload: accessFormData.email,
				});

				//setError((prevState) => ({ ...prevState, error: [] }));
				console.log(accessFormData);
				console.log(state);
				setAccessFormData((prevState) => ({
					...prevState,
					email: '',
					password: '',
				}));
			} else {
				setError(true);
			}
		} catch (err) {
			console.log(err);
		}
	};

	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		setAccessFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};
	//console.log(state);

	useEffect(() => {
		if (signupSuccess.isSuccess) {
			setSignUpSuccess((prevState) => ({
				...prevState,
				shouldRedirect: true,
			}));
			navigate('/createProfile');
		}
	}, [navigate, signupSuccess]);
	return (
		<div className={className}>
			<div className='welcome-info'></div>
			<div className='welcome-info-login'>
				{' '}
				<AuthCard
					accessChoice={accessChoice}
					handleAccessChoice={handleAccessChoice}
					onSubmitHandler={auth}
					accessFormData={accessFormData}
					onChangeHandler={onChangeHandler}
					signupSuccess={signupSuccess}
					error={error}
					state={state.userStats}
				/>
			</div>

			<div className='welcome-info-b'>
				{signupSuccess.isSuccess && (
					<p>{`Access granted for : ${accessFormData.email}`}</p>
				)}
			</div>
		</div>
	);
}
