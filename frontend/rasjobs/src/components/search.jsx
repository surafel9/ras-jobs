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
					<div className='main-search-input'>
						<label htmlFor='search' />
						<input
							type='text'
							placeholder='Search a job'
							aria-label='search'
							spellCheck='true'
							value={searchTerm}
							onChange={searchTermHandler}
						/>
					</div>
					<div className='search-btn'>
						<button type='submit' aria-label='search'>
							Search
						</button>
					</div>
				</form>

				<SearchFilters
					handleFilterChange={props.filterDataHandler}
					filters={props.formData}
					isDataFiltered={props.isDataFiltered}
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
	isDataFiltered,
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
			<div className='filter-group'>
				<h3>Clear filters</h3>
				<label className='toggle-switch'>
					<input
						type='checkbox'
						disabled={isDataFiltered ? false : true}
						onChange={clearOptionHandler}
					/>
					<span className='slider'></span>
				</label>
			</div>
		</div>
	);
}
