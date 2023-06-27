import React from 'react';

export default function SignOut({ LOG_OUT, dispatch }) {
	const signOutHandler = () => {
		dispatch({ type: LOG_OUT });
		sessionStorage.removeItem('token');
	};
	return (
		<button onClick={signOutHandler} className='sign-out-btn'>
			Sign Out
		</button>
	);
}
