import React, { useState } from 'react';
import '../../style/information.scss';
export default function InformationForm() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [jobTitle, setJobTitle] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [workLocationPreference, setWorkLocationPreference] = useState('');
	const [desiredSalary, setDesiredSalary] = useState('');
	const [yearsOfExperience, setYearsOfExperience] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className='information-form-content-sm-wraper'>
				<div className='profile-form-content-wraper'>
					<label htmlFor='firstName' />
					<input
						type='text'
						id='firstName'
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						required
						placeholder='First Name'
					/>
				</div>
				<div className='profile-form-content-wraper'>
					<label htmlFor='lastName' />
					<input
						type='text'
						id='lastName'
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						required
						placeholder='Last Name'
					/>
				</div>
				<div className='profile-form-content-wraper'>
					<label htmlFor='phoneNumber' />
					<input
						type='tel'
						id='phoneNumber'
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
						required
						placeholder='Phone-Number'
					/>
				</div>
				<div className='profile-form-content-wraper'>
					<label htmlFor='jobTitle' />
					<input
						type='text'
						id='jobTitle'
						value={jobTitle}
						onChange={(e) => setJobTitle(e.target.value)}
						required
						placeholder='Current Position Title'
					/>
				</div>
				<div className='profile-form-content-wraper'>
					<label htmlFor='city' />
					<input
						type='text'
						id='city'
						value={city}
						onChange={(e) => setCity(e.target.value)}
						required
						placeholder='Enter Your City Here'
					/>
				</div>
				<div className='profile-form-content-wraper'>
					<label htmlFor='state' />
					<input
						type='text'
						id='state'
						value={state}
						onChange={(e) => setState(e.target.value)}
						required
						placeholder='Your State'
					/>
				</div>
				<div className='profile-form-content-wraper'>
					<label htmlFor='workLocationPreference'>
						Work Location Preference:
					</label>
					<select
						id='workLocationPreference'
						value={workLocationPreference}
						onChange={(e) =>
							setWorkLocationPreference(e.target.value)
						}
						required
					>
						<option value=''>-- Select --</option>
						<option value='remote'>Remote</option>
						<option value='onsite'>Onsite</option>
						<option value='hybrid'>Hybrid</option>
					</select>
				</div>
				<div className='profile-form-content-wraper'>
					<label htmlFor='desiredSalary' />
					<input
						type='number'
						id='desiredSalary'
						value={desiredSalary}
						onChange={(e) => setDesiredSalary(e.target.value)}
						required
						placeholder='Desired Salary'
					/>
				</div>
				<div className='profile-form-content-wraper'>
					<label htmlFor='yearsOfExperience' />
					<input
						type='number'
						id='yearsOfExperience'
						value={yearsOfExperience}
						onChange={(e) => setYearsOfExperience(e.target.value)}
						required
						placeholder='Years of Experiance - Years'
					/>
				</div>

				<button type='submit'>Submit</button>
			</div>
		</form>
	);
}
