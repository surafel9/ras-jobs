import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useReducer } from 'react';
import { SIGN_UP, Log_IN, LOG_OUT } from '../store/types';

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

	const handleAuthorization = (to, subject, text) => {
		//handle mailing in the backend!
	};

	const auth = async (e) => {
		//to, subject and text must be passed to the query
		let response;
		if (e.target.name === 'Log In') {
			response = await loginHandler(accessFormData);
			console.log(accessFormData.email);
			dispatch({ type: Log_IN, payload: accessFormData.email });
			console.log(accessFormData.email);
		} else {
			response = await signUpHandler(accessFormData);
			console.log(accessFormData.email);
			dispatch({ type: SIGN_UP, payload: accessFormData.email });
		}

		console.log(response);

		if (response.status === 200 || response.statusText === 'OK') {
			const { token } = response.data;

			sessionStorage.setItem('token', token);
			setToken(token);

			setError((prevState) => ({ ...prevState, error: [] }));
			setAccessFormData((prevState) => ({
				...prevState,
				email: '',
				password: '',
			}));
		} else {
			setError(true);
		}
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();

		setSignUpSuccess((prevState) => ({
			...prevState,
			isSuccess: true,
			shouldRedirect: true,
		}));
	};

	const retriveToken = () => {
		const token = sessionStorage.getItem('token');
		setToken(token);
	};

	const removeToken = () => {
		sessionStorage.removeItem('token');
		setToken('');
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
		if (signupSuccess.shouldRedirect) {
			setSignUpSuccess((prevState) => ({
				...prevState,
				isSuccess: false,
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
					handleAuthorization={handleAuthorization}
					handleSignUp={auth}
					accessFormData={accessFormData}
					onChangeHandler={onChangeHandler}
					signupSuccess={signupSuccess}
					onSubmitHandler={onSubmitHandler}
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
