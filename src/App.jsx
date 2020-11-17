import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route path="*" component={NotFound} />
	</Switch>
);

export default App;
