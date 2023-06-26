import React, { useState } from 'react';

export default function WorkHistory() {
	const [formData, setFormData] = useState({
		workHistoryTitle: '',
		companyName: '',
		checkCurrent: false,
		startDate: '',
		endDate: '',
		workDescription: '',
	});
	const onChangeHandler = (e) => {
		const { name, value, type, checked } = e.target;
		const inputValue =
			type === 'checkbox' ? (checked ? 'checked' : '') : value;
		setFormData((prevState) => ({ ...prevState, [name]: inputValue }));
	};

	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<div className='profile-form-content-wraper'>
				<label htmlFor='work-experrience-form-title' />
				<input
					name='workHistoryTitle'
					value={formData.workHistoryTitle}
					onChange={onChangeHandler}
					type='text'
					placeholder='Position Title'
					id='work-experrience-form-title'
				/>
			</div>
			<div className='profile-form-content-wraper'>
				<label htmlFor='work-experrience-form-company' />
				<input
					name='companyName'
					value={formData.companyName}
					onChange={onChangeHandler}
					type='text'
					placeholder='Company Name'
					id='work-experrience-form-company'
				/>
			</div>
			<div className='profile-form-content-wraper'>
				<div className='experiance-dates'>
					<div className='current-position'>
						<label htmlFor='durationCheckBox'>
							Is this your current position?
						</label>
						<input
							type='checkbox'
							name='checkCurrent'
							value={formData.checkCurrent}
							checked={formData.checkCurrent}
							onChange={onChangeHandler}
							id='durationCheckBox'
							placeholder='Start'
						/>
					</div>
					<div className='dates-row'>
						<div className='date-input'>
							<label htmlFor='start-duration'>Start</label>
							<input
								type='date'
								name='startDate'
								placeholder='Start Date'
								id='start-duration'
								value={formData.startDate}
								onChange={onChangeHandler}
							/>
						</div>
						<div className='date-input'>
							<label htmlFor='end-duration'>End</label>
							<input
								type='date'
								placeholder='End Date'
								name='endDate'
								id='end-duration'
								value={formData.endDate}
								onChange={onChangeHandler}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='profile-form-content-wraper'>
				<div className='description'>
					<label htmlFor='work-experrience-form-description'>
						Describe your role
					</label>
					<textarea
						name='workDescription'
						type='text'
						value={formData.workDescription}
						onChange={onChangeHandler}
						placeholder='Write a brief description of your role'
						id='work-experrience-form-description'
					/>
				</div>
			</div>
			<button>Add your work history</button>
		</form>
	);
}
