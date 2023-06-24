import React from 'react';

export default function WorkHistory() {
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
				/>
			</form>
		</div>
	);
}
