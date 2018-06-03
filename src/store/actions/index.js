const actionTypes = {
	INCREMENT: 'INCREMENT',
	DECREMENT: 'DECREMENT',
}

const actions = {};

actions.increment = () => {
	return {
		type: actionTypes.INCREMENT,
	};
};

actions.decrement = () => {
	return {
		type: actionTypes.DECREMENT,
	}
};

export default actions;

export {
	actionTypes,
};