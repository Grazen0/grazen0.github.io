import React from 'react';

export type Theme = 'windows' | 'linux';

interface ThemeInfo {
	prefix: string | JSX.Element;
	fallback: string;
	cursor: string;
}

export type Themes = {
	[key in Theme]: ThemeInfo;
};

const themes: Themes = {
	linux: {
		prefix: (
			<>
				<span className="green">elchologamer@elchologamer</span>:
				<span className="light-blue">~</span>${' '}
			</>
		),
		fallback: '$ ',
		cursor: '█',
	},
	windows: {
		prefix: 'C:\\Users\\elchologamer>',
		fallback: '>',
		cursor: '_',
	},
};

export default themes;
