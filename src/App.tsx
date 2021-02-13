import React, { useEffect, useState } from 'react';
import { Theme } from './themes';
import Title from './components/Title';
import './App.css';

const repos = [
	'UserLogin',
	'Dankcord',
	'Ascii Converter',
	'Undertale Dialogues',
];

const App: React.FC = () => {
	const [theme, setTheme] = useState(
		(localStorage.getItem('theme') ?? 'windows') as Theme
	);

	const switchTheme = () => {
		setTheme(prev => (prev === 'windows' ? 'linux' : 'windows'));
	};

	useEffect(() => {
		localStorage.setItem('theme', theme);
		document.body.classList.toggle('linux-theme', theme === 'linux');
	}, [theme]);

	const birthday = new Date();
	birthday.setMonth(7);
	birthday.setDate(31);

	const now = new Date();
	let age = now.getFullYear() - 2006;
	if (now < birthday) age--;

	return (
		<>
			<div id="switch" onClick={switchTheme}>
				<div
					style={{ float: theme === 'windows' ? 'left' : 'right' }}
					id="switch-thumb"></div>
			</div>
			<Title theme={theme} />

			<p id="main-text">
				I'm some {age}-year old who likes coding. <em>A lot</em>, actually.
				Full-stack web developer too (sort of), using primarily the MERN stack.
				Of course, I have done other kinds of projects before apart from web
				dev, such as Discord bots and Minecraft plugins. Also, anime
			</p>

			<br />
			<p>Also, anime enthusiast and Minecraft fan.</p>

			<h3>Some of my projects:</h3>
			<ul id="repos-list">
				{repos.map(repo => (
					<li key={repo}>
						<a
							href={`https://github.com/ElCholoGamer/${repo
								.toLowerCase()
								.replace(/ /g, '-')}`}>
							{repo}
						</a>
					</li>
				))}
			</ul>

			<p id="social">
				Follow me on <a href="https://github.com/ElCholoGamer">GitHub</a>!
			</p>
		</>
	);
};

export default App;
