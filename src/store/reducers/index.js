// import { combineReducers } from 'redux';
import { actionTypes } from '../actions';

const initialState = {
	number: 10,
};

const reducerA = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.DECREMENT: 
			return {
				...state,
				number: state.number - 1,
			}
		case actionTypes.INCREMENT: 
			return {
				...state, 
				number: state.number + 1,
			};
		default:
			return state;
	}
}

export default reducerA;


// export default combineReducers({
// 	reducerA
// });