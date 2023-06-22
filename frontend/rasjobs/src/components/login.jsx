import React from 'react';

export default function Login({ className }) {
	return (
		<div className={className}>
			<div className='welcome-info'>A</div>
			<div className='welcome-info-login'>
				{' '}
				<Test />
			</div>

			<div className='welcome-info-b'>B</div>
		</div>
	);
}

function Signup({ className }) {
	return (
		<div className={className}>
			<div className='welcome-info'>A</div>
			<div className='sign-in-up'>
				<h2>Sign Up</h2>
				<form>
					<input type='text' placeholder='First Name' />
					<input type='text' placeholder='Last Name' />
					<input type='email' placeholder='Email' />
					<input type='tel' placeholder='Phone Number' />
					<button type='submit'>Sign Up</button>
					<button type='button'>Sign Up with Google</button>
				</form>
			</div>
		</div>
	);
}

function Test() {
	const title = [{ name: 'Log In' }, { name: 'Sign Up' }];

	return (
		<div className='login-sign-signup-container'>
			<div className='login-signup-header'>
				<h2>Ras - Jobs ©</h2>
			</div>
			<div className='login-signup-body'>
				<div className='login-signup-title'>
					<ul>
						{title.map((li) => (
							<li key={li.name}>{li.name}</li>
						))}
					</ul>
				</div>

				<button className='login-signup-auth0-buttons'>
					<span style={{ height: 16, width: 16 }}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 326667 333333'
							shape-rendering='geometricPrecision'
							text-rendering='geometricPrecision'
							image-rendering='optimizeQuality'
							fill-rule='evenodd'
							clip-rule='evenodd'
						>
							<path
								d='M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z'
								fill='#4285f4'
							/>
							<path
								d='M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z'
								fill='#34a853'
							/>
							<path
								d='M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z'
								fill='#fbbc04'
							/>
							<path
								d='M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z'
								fill='#ea4335'
							/>
						</svg>
					</span>{' '}
					Log In Using Google
				</button>
				<button className='login-signup-auth0-buttons'>
					<span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							fill='#fff'
							viewBox='0 0 16 16'
						>
							<path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
						</svg>
					</span>
					Log In Using Github
				</button>
				<button className='login-signup-auth0-buttons'>
					<span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							fill='currentColor'
							class='bi bi-facebook'
							viewBox='0 0 16 16'
						>
							<path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z' />
						</svg>
					</span>
					Log In Using Facebook
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
							<button type='submit'>LOG IN</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
