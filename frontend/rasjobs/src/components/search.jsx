import React, { useState } from 'react';
import { JOB_CATEGORIES } from '../data/jobCategories';
import { states } from '../data/allStates';

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

	//should we allow a combined filter ?
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
							spellCheck='true'
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
					JOB_CATEGORIES={JOB_CATEGORIES}
					clearOptionHandler={props.clearOptionHandler}
				/>
			</div>
		</div>
	);
}

function SearchFilters({
	filters,
	handleFilterChange,
	JOB_CATEGORIES,
	clearOptionHandler,
}) {
	return (
		<div className='filter-inputs'>
			<div className='filter-group'>
				<h3>Location:</h3>
				<label>
					<input
						type='checkbox'
						name='work_location'
						value='remote'
						checked={filters.work_location === 'remote'}
						onChange={(event) => handleFilterChange(event)}
						onClick={(e) => clearOptionHandler(e)}
					/>
					Remote
				</label>

				<label>
					<input
						type='checkbox'
						name='work_location'
						value='onsite'
						checked={filters.work_location === 'onsite'}
						onChange={(event) => handleFilterChange(event)}
						onClick={(e) => clearOptionHandler(e)}
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
						onClick={(e) => clearOptionHandler(e)}
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
					<option value='' disabled>
						All
					</option>
					{states.map((state, index) => (
						<option
							value={state.name}
							onChange={(event) => handleFilterChange(event)}
							key={index}
						>
							{state.name} ({state.abbreviation})
						</option>
					))}
				</select>
			</div>
			<div className='filter-group'>
				<h3>Job Category:</h3>
				<select
					name='job_category'
					value={filters.job_category}
					onChange={(event) => handleFilterChange(event)}
				>
					<option value='' disabled>
						All
					</option>
					{JOB_CATEGORIES.map((category, index) => (
						<option
							value={category}
							onChange={(event) => handleFilterChange(event)}
							key={index}
						>
							{category}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}
