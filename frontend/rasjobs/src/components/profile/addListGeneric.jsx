import React, { useState } from 'react';
import Notification from '../../util/notification';

export default function AddListGeneric(props) {
	const { inputName } = props;

	const [formData, setFormData] = useState({
		...props.initalState,
	});

	const [isVisible, setIsVisible] = useState(false);

	const closeNotification = () => {
		setIsVisible(false);
	};
	const showNotification = () => {
		setIsVisible(true);
	};
	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({ ...prevState, [name]: value }));
	};

	const addHandler = (e) => {
		const data = formData[inputName];
		const pattern =
			/^(?!^\s*$)[a-zA-Z0-9!@#$%^&*()-_=+[\]{};:'",.<>/?\s]+$/;

		if (data.trim().length > 0 && pattern.test(data)) {
			const newSkill = {
				inputName,
				value: { id: Date.now(), value: formData[inputName] },
			};

			props.addSkills(newSkill);
			setFormData({ inputName: '' });
			e.preventDefault();
		} else {
			alert(`Not a valid entery!`);
		}
	};

	const listDisplay = props.skills.filter(
		(skill) => skill.inputName === inputName
	);

	return (
		<div className='profile-skills'>
			<form className='profile-skills-input-wraper' onSubmit={addHandler}>
				<label htmlFor={props.inputId} />
				<input
					type='text'
					id={props.inputId}
					name={inputName}
					required
					autoCapitalize='off'
					autoComplete='off'
					autoFocus
					autoCorrect='off'
					placeholder={props.placeHolder}
					list={inputName === 'skillsInput' ? 'skillSuggestions' : ''}
					value={formData[inputName] || ''}
					onChange={onChangeHandler}
				/>
				<datalist id='skillSuggestions'>
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
				</datalist>

				<button type='submit' aria-label='add skill'>
					{props.btnName}
				</button>
			</form>

			<div className='profile-skills-details-wraper'>
				{listDisplay.length > 0 &&
					listDisplay[0].value.map((skill) => (
						<li key={skill.id} id='details-content'>
							{skill.value}
							<span
								onClick={() =>
									props.removeSkill(skill.id, inputName)
								}
							>
								x
							</span>
						</li>
					))}
			</div>
			{isVisible && (
				<Notification
					isVisible={isVisible}
					closeNotification={closeNotification}
					message='Coming Soon 🤞'
				/>
			)}
			<button type='submit' onClick={showNotification}>
				Save Changes
			</button>
		</div>
	);
}
