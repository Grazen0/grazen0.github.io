import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

const Home = React.lazy(() => import('./pages/Home'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const App: React.FC = () => (
	<React.Suspense fallback={<h1>Loading...</h1>}>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="*" component={NotFound} />
		</Switch>
	</React.Suspense>
);

export default App;
