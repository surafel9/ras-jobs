/* CREATE TABLE userprofile (
  id BIGSERIAL PRIMARY KEY,
  user_id bigint REFERENCES users(id),
  title text,
  work_experiance text,
  skills text,
  projects text,
  social text,
  education text,
  certificates text,
  saved_job bigint REFERENCES jobs(id),
  applied_job bigint REFERENCES jobs(id)
);
*/

import React, { useState } from 'react';

export default function CreateProfile({ className }) {
	const [isAboutMeActive, setIsAboutMeActive] = useState(false);
	const [isAddWorkActive, setIsAddWorkActive] = useState(false);

	const [formData, setFormData] = useState({
		title: '',
	});
	const viewportWidth =
		window.innerWidth || document.documentElement.clientWidth;
	const twentyFivePercent = viewportWidth * 0.25;

	const handleAddAboutMe = () => {
		setIsAboutMeActive(!isAboutMeActive);
	};
	const handleWorkExperience = () => {
		setIsAddWorkActive(!isAddWorkActive);
		console.log(isAddWorkActive);
	};
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	//handleSubmit
	return (
		<div className={`${className} profile`}>
			<div className='profile-header'>
				<h2>Get Noticed Curate Your Profile</h2>
			</div>
			<div
				className='about-me-display'
				style={isAboutMeActive ? { opacity: 0.1 } : {}}
			>
				<div className='about-me-person-photo'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='89'
						height='89'
						fill='#cfcfcf'
						className='about-me-person-circle'
						viewBox='0 0 16 16'
					>
						<path d='M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z' />
						<path d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z' />
					</svg>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='21'
						height='21'
						fill='#0049b7'
						className='about-me-addProfile-button'
						viewBox='0 0 16 16'
						role='button'
						onClick={handleAddAboutMe}
					>
						<path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z' />
					</svg>
				</div>

				<div className='about-me-personalInfo'>
					<p> Your Full Name : </p>
					<p>Your Location : </p>
				</div>
			</div>
			{isAboutMeActive && <AboutMe />}
			<AddWorkExperience handleWorkExperience={handleWorkExperience} />
			{isAddWorkActive && (
				<WorkExperienceForm twentyFivePercent={twentyFivePercent} />
			)}
		</div>
	);
}

function AboutMe() {
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

function AddWorkExperience({ handleWorkExperience }) {
	return (
		<div className='work-history'>
			<div className='header'>
				<h3> Add Work Experience</h3>
			</div>
			<div className='add-work-histroy-button'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='34'
					height='34'
					fill='#0049b7'
					className='work-history-button'
					viewBox='0 0 16 16'
					role='button'
					onClick={handleWorkExperience}
				>
					<path d='M2.5 0c-.166 0-.33.016-.487.048l.194.98A1.51 1.51 0 0 1 2.5 1h.458V0H2.5zm2.292 0h-.917v1h.917V0zm1.833 0h-.917v1h.917V0zm1.833 0h-.916v1h.916V0zm1.834 0h-.917v1h.917V0zm1.833 0h-.917v1h.917V0zM13.5 0h-.458v1h.458c.1 0 .199.01.293.029l.194-.981A2.51 2.51 0 0 0 13.5 0zm2.079 1.11a2.511 2.511 0 0 0-.69-.689l-.556.831c.164.11.305.251.415.415l.83-.556zM1.11.421a2.511 2.511 0 0 0-.689.69l.831.556c.11-.164.251-.305.415-.415L1.11.422zM16 2.5c0-.166-.016-.33-.048-.487l-.98.194c.018.094.028.192.028.293v.458h1V2.5zM.048 2.013A2.51 2.51 0 0 0 0 2.5v.458h1V2.5c0-.1.01-.199.029-.293l-.981-.194zM0 3.875v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zM0 5.708v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zM0 7.542v.916h1v-.916H0zm15 .916h1v-.916h-1v.916zM0 9.375v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zm-16 .916v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zm-16 .917v.458c0 .166.016.33.048.487l.98-.194A1.51 1.51 0 0 1 1 13.5v-.458H0zm16 .458v-.458h-1v.458c0 .1-.01.199-.029.293l.981.194c.032-.158.048-.32.048-.487zM.421 14.89c.183.272.417.506.69.689l.556-.831a1.51 1.51 0 0 1-.415-.415l-.83.556zm14.469.689c.272-.183.506-.417.689-.69l-.831-.556c-.11.164-.251.305-.415.415l.556.83zm-12.877.373c.158.032.32.048.487.048h.458v-1H2.5c-.1 0-.199-.01-.293-.029l-.194.981zM13.5 16c.166 0 .33-.016.487-.048l-.194-.98A1.51 1.51 0 0 1 13.5 15h-.458v1h.458zm-9.625 0h.917v-1h-.917v1zm1.833 0h.917v-1h-.917v1zm1.834-1v1h.916v-1h-.916zm1.833 1h.917v-1h-.917v1zm1.833 0h.917v-1h-.917v1zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z' />
				</svg>
			</div>
		</div>
	);
}

function WorkExperienceForm({ twentyFivePercent }) {
	return (
		<div className='work-experience-form'>
			<form>
				<label htmlFor='work-experrience-form-title' />
				<input type='text' placeholder='Title' />
				<label htmlFor='work-experrience-form-company' />
				<input type='text' placeholder='Company' />
				<label htmlFor='work-experrience-form-description' />
				<textarea
					type='text'
					placeholder='Write a brief description of your role'
					style={{ maxWidth: twentyFivePercent + 'px' }}
				/>
			</form>
		</div>
	);
}
