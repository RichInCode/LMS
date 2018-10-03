import {
	createStore,
	applyMiddleware
} from 'redux';
import {
	combineForms,
	createForms
} from 'react-redux-form';

const initialUserState = {
	name: '',
	email: '',
	message: ''
};

const store = createStore(combineForms({
	user: initialUserState,
}));

export default store;