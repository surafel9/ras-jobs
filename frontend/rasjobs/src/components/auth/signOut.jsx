import React from 'react';
import { useAuth } from '../authProvide';
import { LOG_OUT } from '../../store/types';

export default function SignOut() {
	const { dispatch } = useAuth();

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
