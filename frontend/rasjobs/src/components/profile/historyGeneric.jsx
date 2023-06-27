import React, { useState } from 'react';

export default function HistoryGeneric(props) {
	const [formData, setFormData] = useState({
		...props.initalState,
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
				<label htmlFor={props.id} />
				<input
					name={props.name}
					value={formData[props.name]}
					onChange={onChangeHandler}
					type='text'
					placeholder={props.title}
					id={props.id}
				/>
			</div>
			<div className='profile-form-content-wraper'>
				<label htmlFor={props.id2} />
				<input
					name={props.name2}
					value={formData[props.name2]}
					onChange={onChangeHandler}
					type='text'
					placeholder={props.title2}
					id={props.id2}
				/>
			</div>
			<div className='profile-form-content-wraper'>
				<div className='experiance-dates'>
					<div className='current-position'>
						<label htmlFor={props.checkBoxId}>
							{props.checkBoxLable}
						</label>
						<input
							type='checkbox'
							name={props.checkBoxName}
							value={formData[props.name]}
							checked={formData[props.checkCurrent]}
							onChange={onChangeHandler}
							id={props.checkBoxId}
						/>
					</div>
					<div className='dates-row'>
						<div className='date-input'>
							<label htmlFor={props.startDateId}>Start</label>
							<input
								type='date'
								name={props.startDateName}
								id={props.startDateId}
								value={formData[props.startDateName]}
								onChange={onChangeHandler}
							/>
						</div>
						<div className='date-input'>
							<label htmlFor={props.endDateId}>End</label>
							<input
								type='date'
								name={props.endDateName}
								id={props.endDateId}
								value={formData[props.endDateName]}
								onChange={onChangeHandler}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='profile-form-content-wraper'>
				<div className='description'>
					<label htmlFor={props.textAreaId}>
						{props.textAreaLable}
					</label>
					<textarea
						name='workDescription'
						type='text'
						value={formData.workDescription}
						onChange={onChangeHandler}
						placeholder={props.textAreaDescription}
						id={props.textAreaId}
					/>
				</div>
			</div>
			<button>{props.btnName}</button>
		</form>
	);
}
