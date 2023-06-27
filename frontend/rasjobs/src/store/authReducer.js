import { SIGN_UP, LOG_IN, LOG_OUT } from './types';
export function authReducer(state, action) {
	switch (action.type) {
		case SIGN_UP:
			return {
				...state,
				userStats: {
					...state.userStats,
					email: action.payload,
					isLoggedIn: true,
				},
			};

		case LOG_IN:
			return {
				...state,
				userStats: {
					...state.userStats,
					email: action.payload,
					isLoggedIn: true,
				},
			};

		case LOG_OUT:
			return {
				...state,
				userStats: {
					...state.userStats,
					email: '',
					isLoggedIn: false,
				},
			};
		default:
			return state;
	}
}
