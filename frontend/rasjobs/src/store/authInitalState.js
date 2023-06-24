import { createContext } from 'react';

export const initalState = {
	userStats: {
		email: '',
		isLoggedIn: false,
	},
};

export const authContext = createContext(initalState);
