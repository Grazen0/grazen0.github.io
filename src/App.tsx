import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header';

const Home = React.lazy(() => import('./pages/Home'));
const MemeGen = React.lazy(() => import('./pages/MemeGen'));
const Notifications = React.lazy(() => import('./pages/Notifications'));
const MouseTracker = React.lazy(() => import('./pages/MouseTracker'));
const Canvas = React.lazy(() => import('./pages/Canvas'));
const ZalgoText = React.lazy(() => import('./pages/ZalgoText'));
const DiscordPerms = React.lazy(() => import('./pages/DiscordPerms'));

const App: React.FC = () => (
	<React.Suspense fallback={<h1 className="m-4">Loading...</h1>}>
		<Header />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/meme-generator" component={MemeGen} />
			<Route exact path="/notifications" component={Notifications} />
			<Route exact path="/mouse-tracker" component={MouseTracker} />
			<Route exact path="/canvas" component={Canvas} />
			<Route exact path="/zalgo" component={ZalgoText} />
			<Route exact path="/discord" component={DiscordPerms} />

			<Redirect to="/" />
		</Switch>
	</React.Suspense>
);

export default App;
