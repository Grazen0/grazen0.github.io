import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header';

const Home = React.lazy(() => import('./pages/Home'));
const MemeGen = React.lazy(() => import('./pages/MemeGen'));
const Notifications = React.lazy(() => import('./pages/Notifications'));

const App: React.FC = () => (
	<React.Suspense fallback={<h1>Loading...</h1>}>
		<Header />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/meme-generator" component={MemeGen} />
			<Route exact path="/notifications" component={Notifications} />

			<Redirect to="/" />
		</Switch>
	</React.Suspense>
);

export default App;
