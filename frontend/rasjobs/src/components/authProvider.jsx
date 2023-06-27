import { createContext, useContext, useReducer } from 'react';
import { authReducer } from '../store/authReducer';

const initialState = {
	userStats: {
		isLoading: false,
		email: '',
		isLoggedIn: false,
	},
};

const AuthContext = createContext(initialState);

const AuthProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, initialState);

	return (
		<AuthContext.Provider value={{ state, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
