import React from 'react';

export default function Login({ className }) {
	return (
		<div className={className}>
			<div className='from-header'>
				<h3>Sign In</h3>
			</div>

			<form action='/' className='form-fields'>
				<label htmlFor='login-email' />
				<input
					type='text'
					id='login-email'
					placeholder='Email Address'
				/>
				<label htmlFor='login-password' />
				<input
					type='password'
					id='login-password'
					placeholder='Password'
				/>
				<button type='submit' aria-label='reset-password'>
					Forgot Password ?
				</button>
				<button type='submit' aria-label='login'>
					Sign In
				</button>
			</form>

			<div className='social-auth'>
				<button type='button'>Sign in with Google</button>
			</div>
		</div>
	);
}
