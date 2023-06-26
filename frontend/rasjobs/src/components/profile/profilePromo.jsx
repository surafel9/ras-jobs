import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddCircularSVG from '../../util/addCircularSVG';
import CircularAvatarSVG from '../../util/circularAvatarSVG';
//import { useAuth } from '../authProvide';

export default function ProfilePromo({ className }) {
	//const { state } = useAuth();
	const navigate = useNavigate();

	const clickHandler = () => {
		navigate('/createProfile');
		/* if (state.userStats.isLoggedIn) {
			navigate('/createProfile');
		} else {
			navigate('/signin');
		} */
	};
	return (
		<div>
			<div className={className}>
				<div className='profile-header'>
					<h2>Get Noticed Curate Your Profile</h2>
				</div>

				<div className='about-me-person-photo'>
					<CircularAvatarSVG className='about-me-person-circle' />
					<AddCircularSVG
						handler={clickHandler}
						className='about-me-addProfile-button'
					/>
				</div>

				<div className='about-me-personalInfo'>
					<p>Add Your Skills : </p>
					<p>Your Experiance and More ... </p>
				</div>
			</div>
		</div>
	);
}
