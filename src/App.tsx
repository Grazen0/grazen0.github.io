import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

const Home = React.lazy(() => import('./pages/Home'));
const MemeGen = React.lazy(() => import('./pages/MemeGen'));
const Notifications = React.lazy(() => import('./pages/Notifications'));
const MouseTracker = React.lazy(() => import('./pages/MouseTracker'));
const Canvas = React.lazy(() => import('./pages/Canvas'));

const App: React.FC = () => (
	<React.Suspense fallback={<h1 className="m-4">Loading...</h1>}>
		<Header />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/meme-generator" component={MemeGen} />
			<Route exact path="/notifications" component={Notifications} />
			<Route exact path="/mouse-tracker" component={MouseTracker} />
			<Route exact path="/canvas" component={Canvas} />

			<Redirect to="/" />
		</Switch>
	</React.Suspense>
);

export default App;
