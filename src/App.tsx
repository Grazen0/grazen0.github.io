import React, { useEffect, useState } from 'react';
import { Theme } from './themes';
import Title from './components/Title';
import './App.css';

const repos = ['Dankcord', 'Ascii Converter', 'Undertale Dialogues'];

const App: React.FC = () => {
	const [theme, setTheme] = useState(
		(localStorage.getItem('theme') ?? 'linux') as Theme
	);

	useEffect(() => {
		localStorage.setItem('theme', theme);
		document.body.classList.toggle('windows-theme', theme === 'windows');
	}, [theme]);

	return (
		<>
			<Title theme={theme} />

			<p id="main-text">
				I'm some 14-year old who likes coding. <em>A lot</em>, actually.
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
