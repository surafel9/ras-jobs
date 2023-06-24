export function authReducer(state, action) {
	switch (action.type) {
		case 'SIGN_UP':
			return {
				...state,
				userStats: {
					...state.userStats,
					email: action.payload,
					isLoggedIn: true,
				},
			};

		case 'Log_IN':
			return {
				...state,
				userStats: {
					...state.userStats,
					email: action.payload,
					isLoggedIn: true,
				},
			};

		case 'LOG_OUT':
			return {
				...state,
				userStats: {
					...state.userStats,
					email: null,
					isLoggedIn: false,
				},
			};
		default:
			return state;
	}
}
