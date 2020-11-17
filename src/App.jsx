import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
// import Animals from './components/Animals';

const App = () => (
	<Switch>
		<Route exact path="/" children={<h1>Main page</h1>} />
		<Route exact path="/about" children={<h1>About page</h1>} />
		<Route path="*" children={<h1>Not found</h1>} />
	</Switch>
);

{
	/* <h1>Hello there</h1>
<hr />
<p>So this is like my main GitHub page or something</p>
<p>Here's some stuff to check out :D</p>
<Animals /> */
}

export default App;
