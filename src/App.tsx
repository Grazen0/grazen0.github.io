import React, { KeyboardEvent, useEffect, useState } from 'react';
import { Theme } from './themes';
import Title from './components/Title';
import './App.css';

const App: React.FC = () => {
	const [theme, setTheme] = useState(
		(localStorage.getItem('theme') ?? 'linux') as Theme
	);

	useEffect(() => {
		localStorage.setItem('theme', theme);
		document.body.classList.toggle('windows-theme', theme === 'windows');
	}, [theme]);

	return (
		<div id="app">
			<Title theme={theme} />
		</div>
	);
};

export default App;
