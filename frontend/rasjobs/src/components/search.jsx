import React, { useState } from 'react';

export default function Search(props) {
	const [searchTerm, setSearchterm] = useState('');

	const searchTermHandler = (e) => {
		setSearchterm(e.target.value);
	};

	const getSearchKey = (e) => {
		e.preventDefault();
		props.handleSearchKey(searchTerm);
		setSearchterm('');
	};

	return (
		<div className={props.className}>
			<div className='search-layout-adjust' />
			<div className='search-layout'>
				<form
					role='search'
					className='main-search'
					onSubmit={(e) => getSearchKey(e)}
				>
					<label htmlFor='search' className='main-search-input'>
						<input
							type='text'
							placeholder='Search a job'
							aria-label='search'
							value={searchTerm}
							onChange={searchTermHandler}
						/>
					</label>
					<button
						type='submit'
						aria-label='search'
						className='main-search-button'
					>
						Search
					</button>
				</form>

				<SearchFilters
					handleFilterChange={props.filterDataHandler}
					filters={props.formData}
				/>
			</div>
		</div>
	);
}

function SearchFilters({ filters, handleFilterChange }) {
	return (
		<div className='filter-inputs'>
			<div className='filter-group'>
				<h3>Location:</h3>
				<label>
					<input
						type='checkbox'
						name='work_location'
						value='remote'
						checked={filters.work_location == 'remote'}
						onChange={(event) => handleFilterChange(event)}
					/>
					Remote
				</label>

				<label>
					<input
						type='checkbox'
						name='work_location'
						value='onsite'
						checked={filters.work_location == 'onsite'}
						onChange={(event) => handleFilterChange(event)}
					/>
					On-site
				</label>
				<label>
					<input
						type='checkbox'
						name='work_location'
						value='hybrid'
						checked={filters.work_location === 'hybrid'}
						onChange={(event) => handleFilterChange(event)}
					/>
					Hybrid
				</label>
			</div>

			<div className='filter-group'>
				<h3>State:</h3>
				<select
					name='org_state'
					value={filters.org_state}
					onChange={(event) => handleFilterChange(event)}
				>
					<option value=''>All</option>
					<option value='NY'>New York</option>
					<option value='CA'>California</option>
					<option value='TX'>Texas</option>
				</select>
			</div>
			<div className='filter-group'>
				<h3>Job Category:</h3>
				<select
					name='job_category'
					value={filters.job_category}
					onChange={(event) => handleFilterChange(event)}
				>
					<option value=''>All</option>
					<option value='software'>Software</option>
					<option value='design'>Design</option>
					<option value='marketing'>Marketing</option>
				</select>
			</div>
		</div>
	);
}
