import React from 'react';

export default function AboutMe() {
	return (
		<div className='about-me'>
			<div className='user-name'>
				<label htmlFor='userName' />
				<input id='userName' type='text' placeholder='Full Name' />
			</div>
			<div className='headline'>
				<label htmlFor='headline' />
				<input type='text' placeholder='Head line' id='headline' />
			</div>
			<div className='location'>
				<label htmlFor='location' />
				<input type='text' placeholder='Your Location' id='location' />
			</div>
			<div className='prefered-work-location'>
				<label htmlFor='prefered-work-location' />
				<input
					type='text'
					placeholder='Your Prefered Work Location Remote/Onsite/Hybrid ?'
					id='prefered-work-location '
				/>
			</div>
			<div className='about-me-save-button'>
				<button type='submit' aria-label='Save Changes'>
					Save Changes
				</button>
			</div>
		</div>
	);
}
