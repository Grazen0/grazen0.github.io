import React, { useEffect, useState } from 'react';
import themes, { Theme } from './themes';
import './App.css';

const App: React.FC = () => {
	const [cursor, setCursor] = useState(true);
	const [theme, setTheme] = useState<Theme>(
		(localStorage.getItem('theme') ?? 'linux') as Theme
	);

	useEffect(() => {
		localStorage.setItem('theme', theme);
		document.body.classList.toggle('windows-theme', theme === 'windows');
	}, [theme]);

	useEffect(() => {
		const timer = setInterval(() => setCursor(prev => !prev), 500);
		return () => clearInterval(timer);
	}, []);

	const { prefix, cursor: textCursor, fallback } =
		themes[theme] ?? themes.linux;

	return (
		<div id="app">
			<h2
				id="title"
				onClick={() =>
					setTheme(prev => (prev === 'windows' ? 'linux' : 'windows'))
				}>
				<span id="prefix">{prefix}</span>
				<span id="fallback">{fallback}</span>echo "Hello, world!"
				<span className={!cursor ? 'transparent' : ''}>{textCursor}</span>
			</h2>
		</div>
	);
};

export default App;
