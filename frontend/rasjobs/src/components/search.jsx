import React, { useState } from 'react';

export default function Search(props) {
	return (
		<div className={props.className}>
			<form role='search' className='main-search'>
				<label htmlFor='search'>
					<input
						type='text'
						placeholder='Search a job'
						aria-label='search'
					/>
				</label>
				<button type='submit' aria-label='search'>
					Search
				</button>
			</form>
			<SearchFilters />
		</div>
	);
}

function SearchFilters() {
	const [filters, setFilters] = useState({
		location: '',
		state: '',
		jobCategory: '',
	});

	const handleFilterChange = (event) => {
		const { name, value } = event.target;
		setFilters((prevFilters) => ({
			...prevFilters,
			[name]: value,
		}));
	};

	return (
		<form className='search-filters'>
			<div className='filter-inputs'>
				<div className='filter-group'>
					<h3>Location:</h3>
					<label>
						<input
							type='checkbox'
							name='location'
							value='remote'
							checked={filters.location === 'remote'}
							onChange={(event) => handleFilterChange(event)}
						/>
						Remote
					</label>
					<label>
						<input
							type='checkbox'
							name='location'
							value='on-site'
							checked={filters.location === 'on-site'}
							onChange={(event) => handleFilterChange(event)}
						/>
						On-site
					</label>
					<label>
						<input
							type='checkbox'
							name='location'
							value='hybrid'
							checked={filters.location === 'hybrid'}
							onChange={(event) => handleFilterChange(event)}
						/>
						Hybrid
					</label>
				</div>

				<div className='filter-group'>
					<h3>State:</h3>
					<select
						name='state'
						value={filters.state}
						onChange={(event) => handleFilterChange(event)}
					>
						<option value=''>All</option>
						<option value='NY'>New York</option>
						<option value='CA'>California</option>
						<option value='TX'>Texas</option>
						{/* Add more options as needed */}
					</select>
				</div>

				<div className='filter-group'>
					<h3>Job Category:</h3>
					<select
						name='jobCategory'
						value={filters.jobCategory}
						onChange={(event) => handleFilterChange(event)}
					>
						<option value=''>All</option>
						<option value='software'>Software</option>
						<option value='design'>Design</option>
						<option value='marketing'>Marketing</option>
					</select>
				</div>
			</div>
		</form>
	);
}
