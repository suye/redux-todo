import {Provider} from 'react-redux';
import {render} from 'react-dom';
import React from 'react';
import configureStore from './store/configureStore';
import App from './container/App';
import 'todomvc-app-css/index.css'
const store = configureStore();

render(
	<Provider store={store} >
    	<App/>
  	</Provider>,
	document.getElementById("root")
)
