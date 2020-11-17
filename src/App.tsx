import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';

const Home = React.lazy(() => import('./pages/Home'));
const MemeGen = React.lazy(() => import('./pages/MemeGen'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const App: React.FC = () => (
	<React.Suspense fallback={<h1>Loading...</h1>}>
		<Header />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/meme-generator" component={MemeGen} />
			<Route path="*" component={NotFound} />
		</Switch>
	</React.Suspense>
);

export default App;
