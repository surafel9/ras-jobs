import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useReducer } from 'react';
import { initalState } from '../store/authInitalState';
import { authReducer } from '../store/authReducer';
import { SIGN_UP, Log_IN, LOG_OUT } from '../store/types';
import axios from 'axios';
import AuthCard from './auth/authCard';
import { loginHandler } from '../util/handleLogIn';
import { signUpHandler } from '../util/handleSignUp';

export default function Login({ className }) {
	const [accessChoice, setAccessChoice] = useState('Log In');
	const [token, setToken] = useState(null);
	const [state, dispatch] = useReducer(authReducer, initalState);
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
		} else {
			response = await signUpHandler(accessFormData);
		}

		console.log(response);

		if (response.status === 200 || response.statusText === 'OK') {
			const { token } = response.data;

			sessionStorage.setItem('token', token);
			setToken(token);
			dispatch({ type: SIGN_UP, payload: accessFormData.email });
			setError((prevState) => ({ ...prevState, error: [] }));
			setSignUpSuccess((prevState) => ({
				...prevState,
				isSuccess: true,
				shouldRedirect: true,
			}));
			if (signupSuccess.shouldRedirect) {
				navigate('/createProfile');
			}
		} else {
			setError(true);
		}
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		setAccessFormData((prevState) => ({
			...prevState,
			email: '',
			password: '',
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
				/>
			</div>

			<div className='welcome-info-b'>
				{signupSuccess.isSuccess && <p>Logged in as {state.email}</p>}
			</div>
		</div>
	);
}
