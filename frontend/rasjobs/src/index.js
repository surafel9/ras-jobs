import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './components/erro';
import Login from './components/login';
import CreateProfile from './components/createProfile';
import PostJob from './components/postJob';
import Home from './components/home';
import Main from './components/main';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		errorElement: <ErrorPage />,

		children: [
			{ path: '/', element: <Home className='home' /> },
			{
				path: '/login',
				element: <Login className='login' />,
			},
			{
				path: '/createProfile',
				element: <CreateProfile />,
			},
			{
				path: '/postJob',
				element: <PostJob />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
