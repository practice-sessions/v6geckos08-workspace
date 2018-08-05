import {
	GET_DEV_PROFILE,
	DEV_PROFILE_LOADING,
	GET_ERRORS,
	CLEAR_CURRENT_DEV_PROFILE,
	GET_ERRORS,
	SET_CURRENT_CLIENT
} from '../actions/types';

const initialState = {
	devProfile: null,
	devProfiles: null,
	loading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case DEV_PROFILE_LOADING:
			return {
				...state,
				loading: true
			};
		case GET_DEV_PROFILE:
			return {
				...state,
				devProfile: action.payload,
				loading: false
			};
		default:
			return state;
	}
}
