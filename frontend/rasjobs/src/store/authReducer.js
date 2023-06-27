import { SIGN_UP, LOG_IN, LOG_OUT, SET_LOADING } from './types';
export function authReducer(state, action) {
	switch (action.type) {
		case SET_LOADING: {
			return {
				...state,
				userStats: {
					...state.userStats,
					isLoading: action.payload.isLoading,
				},
			};
		}
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
