import { createContext, useContext, useReducer } from 'react';
import { authReducer } from '../store/authReducer';

const initalState = {
	userStats: {
		email: '',
		isLoggedIn: false,
	},
};

const AuthContext = createContext(initalState);

const AuthProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, initalState);

	return (
		<AuthContext.Provider value={{ state, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
