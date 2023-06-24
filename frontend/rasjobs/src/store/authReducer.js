export function authReducer(state, action) {
	switch (action.type) {
		case 'SIGN_UP':
			return {
				...state,
				userStats: {
					...state.userStats,
					email: action.payload.email,
					isLoggedIn: true,
				},
			};

		case 'Log_IN':
			return {
				...state,
				userStats: {
					...state.userStats,
					email: action.payload.email,
					isLoggedIn: true,
				},
			};

		case 'LOG_OUT':
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
