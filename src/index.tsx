import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';

render(
	<HashRouter basename="/">
		<App />
	</HashRouter>,
	document.getElementById('root')
);
