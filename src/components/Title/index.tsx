import React, { useEffect, useState } from 'react';
import themes, { Theme } from '../../themes';
import './Title.css';

interface Props {
	theme: Theme;
}

const Title: React.FC<Props> = ({ theme }) => {
	const [cursor, setCursor] = useState(true);

	useEffect(() => {
		const timer = setInterval(() => setCursor(prev => !prev), 500);
		return () => clearInterval(timer);
	}, []);

	const { prefix, cursor: textCursor, fallback } =
		themes[theme] ?? themes.linux;

	return (
		<h2 id="title">
			<span id="prefix">{prefix}</span>
			<span id="fallback">{fallback}</span>echo "Hello, world!"
			<span className={!cursor ? 'transparent' : ''}>{textCursor}</span>
		</h2>
	);
};

export default Title;
