import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { SIGN_UP, LOG_IN, LOG_OUT, SET_LOADING } from '../store/types';

import AuthCard from './auth/authCard';
import { loginHandler } from '../util/handleLogIn';
import { signUpHandler } from '../util/handleSignUp';
import { useAuth } from './authProvider';

const passwordRegex =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export default function Login({ className }) {
	const [accessChoice, setAccessChoice] = useState('Log In');
	const { state, dispatch } = useAuth();

	const [errorMessage, setErrorMessage] = useState({
		isError: false,
		errorMessage: '',
	});
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
		setErrorMessage((prevErr) => ({
			...prevErr,
			isError: false,
			errorMessage: 'response.data',
		}));
	};

	const auth = async (e) => {
		//to, subject and text must be passed to the query
		e.preventDefault();

		let response;
		try {
			if (accessChoice === 'Log In') {
				response = await loginHandler(accessFormData);
			} else {
				response = await signUpHandler(accessFormData);
			}

			if (response.status === 200 || response.statusText === 'OK') {
				const { token } = response.data;
				dispatch({
					type: SET_LOADING,
					payload: { isLoading: true },
				});
				sessionStorage.setItem('token', token);
				console.log(state);
				setSignUpSuccess((prevState) => ({
					...prevState,
					isSuccess: true,
				}));
				dispatch({
					type: e.target.name === 'Log In' ? LOG_IN : SIGN_UP,
					payload: accessFormData.email,
				});

				setAccessFormData((prevState) => ({
					...prevState,
					email: '',
					password: '',
				}));
				dispatch({
					type: SET_LOADING,
					payload: { isLoading: false },
				});
			} else if (response.status === 301) {
				setAccessFormData((prevState) => ({
					...prevState,
					email: '',
					password: '',
				}));
				setErrorMessage((prevErr) => ({
					...prevErr,
					isError: true,
					errorMessage: response.data.errors
						.map((err) => err.msg)
						.join(', '),
				}));

				//console.log(errorMessage);
			} else if (response.status === 401 || 500) {
				setAccessFormData((prevState) => ({
					...prevState,
					email: '',
					password: '',
				}));

				setErrorMessage((prevErr) => ({
					...prevErr,
					isError: true,
					errorMessage: response.data,
				}));
			}
		} catch (err) {
			//console.log(err);
			return;
		}
	};

	const onChangeHandler = (e) => {
		setErrorMessage((prevErr) => ({
			...prevErr,
			isError: true,
			errorMessage: '',
		}));
		const { name, value } = e.target;
		setAccessFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const onPasteHandler = (e) => {
		e.preventDefault();
		setErrorMessage((prevErr) => ({
			...prevErr,
			isError: true,
			errorMessage: '',
		}));
		const pastedData =
			e.target.value + e.clipboardData.getData('text/plain').trim();

		if (
			(e.target.name === 'email' && emailRegex.test(pastedData)) ||
			(e.target.name === 'password' && passwordRegex.test(pastedData))
		) {
			const name = e.target.name;
			setAccessFormData((prevState) => ({
				...prevState,
				[name]: pastedData,
			}));
		} else {
			alert('Invalid input');
		}
	};

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
					state={state.userStats}
					LOG_OUT={LOG_OUT}
					dispatch={dispatch}
					onPasteHandler={onPasteHandler}
					errorMessage={errorMessage}
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

//make a log in and log out component! separate the issue.
