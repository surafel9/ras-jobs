import { filterJobByKeyWord } from '../data/filterJobByKeyword';

export function jobReducer(state, action) {
	switch (action.type) {
		case 'SET_FORMDATA':
			return {
				...state,
				formData: {
					...state.formData,
					[action.payload.name]: action.payload.value,
					isWorkLocationTwice: action.payload.isWork_locationTwice,
				},
			};

		case 'CLEAR_FORMDATA':
			return {
				...state,
				formData: {
					...state.formData,
					job_category: '',
					work_location: '',
					org_state: '',
					isWork_locationTwice: false,
				},
			};
		case 'SET_LOADING':
			return {
				...state,
				data: {
					...state.data,
					isLoading: action.payload,
				},
			};

		case 'SET_DATA':
			return {
				...state,
				data: {
					...state.data,
					data: action.payload,
					isDataFiltered: false,
				},
			};

		case 'SET_CACHESTATE':
			return {
				...state,
				cahcheState: action.payload,
			};

		case 'FILTER_DATA':
			const whichData = state.formData.isWorkLocationTwice
				? state.cahcheState
				: state.data.data;
			return {
				...state,
				data: {
					...state.data,
					data: whichData.filter((job) =>
						Object.entries(state.formData).every(([key, value]) => {
							if (key === 'job_category' && value !== '') {
								return (
									job[key].toLowerCase() ===
									value.toLowerCase()
								);
							}

							if (key === 'work_location' && value !== '') {
								return (
									job[key].toLowerCase() ===
									value.toLowerCase()
								);
							}
							if (key === 'org_state' && value !== '') {
								return (
									job[key].toLowerCase() ===
									value.toLowerCase()
								);
							}
							return true;
						})
					),
					isDataFiltered: true,
				},
			};

		case 'SET_SEARCHKEY':
			return {
				...state,
				searchKey: action.payload,
			};
		case 'SET_FILTERED_DATA_BY_KEY_WORD':
			const filteredData = filterJobByKeyWord(
				state.searchKey,
				state.data,
				state.cahcheState
			);
			return {
				...state,
				data: {
					...state.data,
					data: filteredData,
					isDataFiltered: true,
				},
			};

		default:
			return state;
	}
}
