import GoogleSVG from '../../util/googleSVG';
import GithubSVG from '../../util/githubSVG';
import FacebookSVG from '../../util/facebookSVG';

export default function AuthCard({
	accessChoice,
	setAccessChoice,
	handleAccessChoice,
	handleAuthorization,
	handleSignUp,
}) {
	const title = [{ name: 'Log In' }, { name: 'Sign Up' }];

	return (
		<div className='login-sign-signup-container'>
			<div className='login-signup-header'>
				<h2>Ras - Jobs ©</h2>
			</div>
			<div className='login-signup-body'>
				<div className='login-signup-title'>
					<ul>
						{title.map((item) => (
							<li
								key={item.name}
								onClick={() => handleAccessChoice(item.name)}
								value={item.name}
								style={{
									opacity:
										accessChoice === item.name ? 1 : 0.5,
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
					<form>
						<div className='log-in-up-email'>
							<input
								type='email'
								placeholder='Email'
								required
								autoFocus
								autoComplete='off'
								aria-label='Email'
								aria-invalid='false'
							/>
						</div>

						<div className='log-in-up-password'>
							<input
								type='password'
								placeholder='Password'
								required
								autoComplete='off'
								aria-label='Password'
								aria-invalid='false'
							/>
						</div>
						<div className='reset-log-in-up-link'>
							<a href='#'>Forgot Password?</a>
						</div>

						<div className='log-in-up-button'>
							<button
								type='submit'
								onClick={
									accessChoice === 'Log In'
										? handleAuthorization
										: handleSignUp
								}
							>
								{accessChoice}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
