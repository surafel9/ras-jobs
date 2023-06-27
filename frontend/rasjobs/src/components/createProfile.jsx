import React, { useState } from 'react';

import { PROFILE } from './profile/profile';
import renderActiveItem from './profile/renderActiveItem';

export default function CreateProfile({ className }) {
	const [activeCard, setActiveCard] = useState(PROFILE[0]);
	const [skills, setSkills] = useState([
		{ inputName: 'certificatesInput', value: [] },
		{ inputName: 'webInput', value: [] },
		{ inputName: 'skillsInput', value: [] },
	]);

	const onClickHandler = (item) => {
		setActiveCard(item);
	};

	const addSkills = (skill) => {
		setSkills((prevState) =>
			prevState.map((prevSkill) =>
				prevSkill.inputName === skill.inputName
					? { ...prevSkill, value: [...prevSkill.value, skill.value] }
					: prevSkill
			)
		);
	};

	const removeSkill = (id, inputName) => {
		setSkills((prevSkills) =>
			prevSkills.map((skill) => {
				if (skill.inputName === inputName) {
					return {
						...skill,
						value: skill.value.filter((i) => i.id !== id),
					};
				}
				return skill;
			})
		);
	};

	return (
		<div className={className}>
			<div className='add-profile-cards'>
				{PROFILE.slice(0, 3).map((item) => (
					<div className='add-profile-cards-each' key={item.id}>
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

						{renderActiveItem(
							activeCard,
							skills,
							addSkills,
							removeSkill
						)}
					</div>
				</div>
			</div>
			<div className='add-profile-cards-2'>
				{PROFILE.slice(3).map((item) => (
					<div className='add-profile-cards-each' key={item.id}>
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
		<div
			className='profile-card'
			style={{ border: isActive ? '1px dotted blue' : '' }}
		>
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
