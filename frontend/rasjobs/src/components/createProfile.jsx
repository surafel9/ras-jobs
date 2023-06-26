import React, { useState } from 'react';
import InformationForm from './profile/information';
import WorkHistory from './profile/workHistory';
import Skills from './profile/skills';
const profile = [
	{
		id: 1,
		title: 'Basic Information',
		details:
			'Add your basic information to appear on top of search results',
		moreInfo: '',
		formComponent: <InformationForm />,
	},
	{
		id: 2,
		title: 'Work History',
		details: "Mostly it's expriance recuriters check!",
		formComponent: <WorkHistory />,
	},
	{
		id: 3,
		title: 'Skills',
		details: 'Make your profile complete add your skills',
		formComponent: <Skills />,
	},
	{
		id: 4,
		title: 'Education',
		details: 'Educational background',
		formComponent: <Education />,
	},
	{
		id: 5,
		title: 'Web Presence',
		details: 'Show off what you achived so far, add links here',
		formComponent: <Web />,
	},
	{
		id: 6,
		title: 'Certificates',
		details: 'Any certificates that you have',
		formComponent: <Certificates />,
	},
];
export default function CreateProfile({ className }) {
	const [activeCard, setActiveCard] = useState(profile[0]);

	const onClickHandler = (item) => {
		setActiveCard(item);
	};

	return (
		<div className={className}>
			<div className='add-profile-cards'>
				{profile.slice(0, 3).map((item) => (
					<div className='add-profile-cards-each'>
						<ProfileCard
							item={item}
							onClickHandler={onClickHandler}
							isActive={item === activeCard}
						/>
					</div>
				))}
			</div>
			<div className='profile-add-details'>
				<div className='profile-add-details-fancy-margin'>
					<div className='information-wraper'>
						<h3>{activeCard.title}</h3>
						{activeCard.formComponent}
					</div>
				</div>
			</div>
			<div className='add-profile-cards-2'>
				{profile.slice(3).map((item) => (
					<div className='add-profile-cards-each'>
						<ProfileCard
							item={item}
							onClickHandler={onClickHandler}
							isActive={item === activeCard}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

function ProfileCard({ item, onClickHandler, isActive }) {
	return (
		<div className='profile-card'>
			<div className='title'>
				<h3>{item.title}</h3>
			</div>
			<div className='details'>
				<p>{item.details}</p>
			</div>
			<div className='btn'>
				<button onClick={() => onClickHandler(item)}>Add</button>
			</div>
		</div>
	);
}

function Education() {
	return <>Hello from education</>;
}
function Web() {
	return <>Hello from web</>;
}
function Certificates() {
	return <>Hello from certificates</>;
}
