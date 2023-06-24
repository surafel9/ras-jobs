import React from 'react';
import ProfilePromo from './profile/profilePromo';
import AboutMe from './profile/aboutMe';
import WorkHistory from './profile/workHistory';

export default function CreateProfile({ className }) {
	return (
		<div className={className}>
			<ProfilePromo />
			<AboutMe />
			<WorkHistory />
		</div>
	);
}
