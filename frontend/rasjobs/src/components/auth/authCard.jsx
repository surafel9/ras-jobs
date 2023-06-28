import GoogleSVG from '../../util/googleSVG';
import GithubSVG from '../../util/githubSVG';
import FacebookSVG from '../../util/facebookSVG';
import Loading from '../loading';
import SignOut from './signOut';
import Notification from '../../util/notification';
import { useState } from 'react';

export default function AuthCard({
	accessChoice,
	handleAccessChoice,
	accessFormData,
	onChangeHandler,
	onSubmitHandler,
	state,
	LOG_OUT,
	dispatch,
	onPasteHandler,
	errorMessage,
}) {
	const title = [{ name: 'Log In' }, { name: 'Sign Up' }];
	const [isVisible, setIsVisible] = useState(false);

	const closeNotification = () => {
		setIsVisible(false);
	};
	const showNotification = () => {
		setIsVisible(true);
	};

	return (
		<>
			{state.isLoading && <Loading />}
			<div className='login-sign-signup-container'>
				<div className='login-signup-header'>
					<h2>Ras - Jobs ©</h2>
				</div>
				{state.isLoading && <Loading />}
				{state.isLoggedIn ? (
					<SignOut LOG_OUT={LOG_OUT} dispatch={dispatch} />
				) : (
					<div className='login-signup-body'>
						<div className='login-signup-title'>
							<ul>
								{title.map((item) => (
									<li
										key={item.name}
										onClick={() =>
											handleAccessChoice(item.name)
										}
										value={item.name}
										style={{
											opacity:
												accessChoice === item.name
													? 1
													: 0.5,
											borderBottomWidth:
												accessChoice === item.name
													? '2px'
													: '0',
											borderBottomStyle: 'solid',
											borderBottomColor: '#ffb74d',
											transition:
												'text-decoration 0.3s eas-in-out',
											cursor: 'pointer',
										}}
									>
										{item.name}
									</li>
								))}
							</ul>
						</div>

						{isVisible && (
							<Notification
								isVisible={isVisible}
								closeNotification={closeNotification}
								message='Coming Soon 🤞'
							/>
						)}
						<button
							className='login-signup-auth0-buttons'
							onClick={showNotification}
						>
							<span style={{ height: 16, width: 16 }}>
								<GoogleSVG />
							</span>{' '}
							{accessChoice} - Using Google
						</button>
						<button
							className='login-signup-auth0-buttons'
							onClick={showNotification}
						>
							<span>
								<GithubSVG />
							</span>
							{accessChoice} - Using Github
						</button>
						<button
							className='login-signup-auth0-buttons'
							onClick={showNotification}
						>
							<span>
								<FacebookSVG />
							</span>
							{accessChoice} - Using Facebook
						</button>

						<div className='login-signup-form'>
							<p>or</p>
							<form onSubmit={onSubmitHandler}>
								<div className='log-in-up-email'>
									<input
										type='email'
										name='email'
										value={accessFormData.email}
										placeholder='Email'
										autoFocus
										required
										autoComplete='off'
										aria-label='Email'
										aria-invalid='false'
										onChange={(event) =>
											onChangeHandler(event)
										}
										onPaste={onPasteHandler}
									/>
								</div>

								<div className='log-in-up-password'>
									<input
										type='password'
										name='password'
										value={accessFormData.password}
										placeholder='Password'
										required
										autoComplete='off'
										aria-label='Password'
										aria-invalid='false'
										onChange={(event) =>
											onChangeHandler(event)
										}
										onPaste={onPasteHandler}
									/>
								</div>
								<div className='error'>
									{errorMessage.isError && (
										<p>
											{errorMessage.errorMessage} <br />
										</p>
									)}
								</div>
								<div className='reset-log-in-up-link'>
									<p onClick={showNotification}>
										Forgot Password?
									</p>
								</div>

								<div className='log-in-up-button'>
									<button type='submit' name={accessChoice}>
										{accessChoice}
									</button>
								</div>
							</form>
						</div>
					</div>
				)}
			</div>
		</>
	);
}
