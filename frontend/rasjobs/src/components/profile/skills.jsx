import React, { useState } from 'react';

export default function Skills() {
	const [formData, setFormData] = useState({
		skillsInput: '',
	});
	const [skills, setSkills] = useState([]);

	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({ ...prevState, [name]: value }));
	};

	const addHandler = (e) => {
		console.log('here');
		setSkills((prevState) => [...prevState, formData.skillsInput]);
		e.preventDefault();
		setFormData({ skillsInput: '' });
	};

	const removeSkill = (id) => {
		setSkills((prevState) => [prevState.filter((_, i) => i !== id)]);
	};
	return (
		<div className='profile-skills'>
			<form className='profile-skills-input-wraper' onSubmit={addHandler}>
				<label htmlFor='skillsInput' />
				<input
					type='text'
					id='skillsInput'
					name='skillsInput'
					autoCapitalize='off'
					autoComplete='off'
					autoFocus
					autoCorrect='off'
					placeholder='Enter your skills'
					list='skillSuggestions'
					value={formData.skillsInput}
					onChange={onChangeHandler}
				/>

				<button type='submit' aria-label='add skill'>
					Add your skill
				</button>
			</form>

			<div className='profile-skills-details-wraper'>
				{skills.length > 0 &&
					skills.map((skill, index) => (
						<li key={index}>
							{skill}
							<span onClick={() => removeSkill(index)}>x</span>
						</li>
					))}
			</div>
		</div>
	);
}

/* 	<datalist id='skillSuggestions'>
					<option value='JavaScript' />
					<option value='Python' />
					<option value='Java' />
					<option value='C#' />
					<option value='C++' />
					<option value='Ruby' />
					<option value='PHP' />
					<option value='HTML' />
					<option value='CSS' />
					<option value='React' />
					<option value='Angular' />
					<option value='Vue.js' />
					<option value='Node.js' />
					<option value='Express.js' />
					<option value='Django' />
					<option value='Flask' />
					<option value='SQL' />
					<option value='NoSQL' />
					<option value='Git' />
					<option value='AWS' />
					<option value='Azure' />
					<option value='RESTful APIs' />
					<option value='Microservices' />
					<option value='CI/CD' />
					<option value='Agile Development' />
					<option value='Scrum' />
					<option value='Test-Driven Development' />
					<option value='Machine Learning' />
					<option value='Data Science' />
					<option value='DevOps' />
					<option value='Containerization' />
					<option value='Kubernetes' />
					<option value='Blockchain' />
					<option value='Mobile App Development' />
					<option value='UI/UX Design' />
				</datalist>*/
