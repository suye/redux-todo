import {createStore} from 'redux';
import rootReducer from '../reducers/index';

export default function configureStore(preloadedState){
	const store = createStore(rootReducer,preloadedState);
	return store;
}