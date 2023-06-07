import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';

import Root from '../src/components/root';
import ErrorPage from './components/erro';
import Navigation from './components/navigation';
import Login from './components/login';
import CreateProfile from './components/createProfile';
import PostJob from './components/postJob';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Navigation />,
				children: [
					{
						path: '/login',
						element: <Route index element={<Login />} />,
					},
					{
						path: '/createProfile',
						element: <Route index element={<CreateProfile />} />,
					},
					{
						path: '/postJob',
						element: <Route index element={<PostJob />} />,
					},
				],
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
