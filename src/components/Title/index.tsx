import React, { useEffect, useRef, useState } from 'react';
import themes, { Theme } from '../../themes';
import './Title.css';

interface Props {
	theme: Theme;
}

const text = 'echo "Hello, world!"';

const Title: React.FC<Props> = ({ theme }) => {
	const timer = useRef<ReturnType<typeof setInterval> | null>(null);
	const [animate, setAnimate] = useState(true);
	const [length, setLength] = useState(0);
	const [blink, setBlink] = useState(false);

	const handleKeyDown = (e: KeyboardEvent) => {
		if (['Backspace', 'Delete'].includes(e.key)) {
			setLength(prev => Math.max(prev - 1, 0));
		} else if (e.key.length === 1) {
			setLength(prev => Math.min(prev + 1, text.length));
		}
	};

	useEffect(() => {
		// Restart blink on length change
		setBlink(false);
		timer.current = setInterval(() => setBlink(prev => !prev), 500);

		if (animate) {
			setTimeout(
				() =>
					setLength(prev => {
						prev++;
						if (prev >= text.length) setAnimate(false);
						return prev;
					}),
				Math.floor(Math.random() * 150) + 40
			);
		}

		return () => {
			if (timer.current !== null) clearInterval(timer.current);
		};
	}, [length]);

	useEffect(() => {
		if (animate) return;

		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [animate]);

	const { prefix, cursor, fallback } = themes[theme] ?? themes.linux;
	const finalText = text.slice(0, length) + (blink ? '' : cursor);

	return (
		<h2 id="title">
			<span id="prefix">{prefix}</span>
			<span id="fallback">{fallback}</span>
			{finalText.padEnd(text.length + cursor.length, ' ')}
		</h2>
	);
};

export default Title;
