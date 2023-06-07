import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './navigation';
import Main from './main';
import Footer from './footer';
import Profile from './profile';
import '../style/style.scss';

export default function Root() {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const toggleMode = () => {
		console.log(isDarkMode);

		setIsDarkMode((prevMode) => !prevMode);
	};

	return (
		<div className={`root ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
			<Navigation className={'navigation'} toggleMode={toggleMode} />

			<div className='details'>
				<Profile className={'profile'} />
				<Main className={'main'} />
			</div>

			<Footer className={'footer'} />
		</div>
	);
}
