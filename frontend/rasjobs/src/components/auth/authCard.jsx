import GoogleSVG from '../../util/googleSVG';
import GithubSVG from '../../util/githubSVG';
import FacebookSVG from '../../util/facebookSVG';
import Loading from '../loading';
import SignOut from './signOut';

export default function AuthCard({
	accessChoice,
	handleAccessChoice,
	handleSignUp,
	accessFormData,
	onChangeHandler,
	onSubmitHandler,
	signupSuccess,
	error,
	state,
}) {
	const title = [{ name: 'Log In' }, { name: 'Sign Up' }];

	return (
		<div className='login-sign-signup-container'>
			<div className='login-signup-header'>
				<h2>Ras - Jobs ©</h2>
			</div>
			{state.isLoggedIn ? (
				<SignOut />
			) : (
				<div className='login-signup-body'>
					{signupSuccess.isSuccess && <Loading />}

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

					<button className='login-signup-auth0-buttons'>
						<span style={{ height: 16, width: 16 }}>
							<GoogleSVG />
						</span>{' '}
						{accessChoice}Using Google
					</button>
					<button className='login-signup-auth0-buttons'>
						<span>
							<GithubSVG />
						</span>
						{accessChoice} Using Github
					</button>
					<button className='login-signup-auth0-buttons'>
						<span>
							<FacebookSVG />
						</span>
						{accessChoice} Using Facebook
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
									autoComplete='off'
									aria-label='Email'
									aria-invalid='false'
									onChange={(event) => onChangeHandler(event)}
								/>
							</div>

							<div className='log-in-up-password'>
								<input
									type='password'
									name='password'
									value={accessFormData.password}
									placeholder='Password'
									autoComplete='off'
									aria-label='Password'
									aria-invalid='false'
									onChange={(event) => onChangeHandler(event)}
								/>
							</div>
							<div className='error'>
								{error && (
									<p>
										'Please check your input and start over'
									</p>
								)}
							</div>
							<div className='reset-log-in-up-link'>
								<a href='/'>Forgot Password?</a>
							</div>

							<div className='log-in-up-button'>
								<button
									type='submit'
									name={accessChoice}
									onClick={handleSignUp}
								>
									{accessChoice}
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	);
}
