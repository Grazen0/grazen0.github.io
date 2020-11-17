import React from 'react';

function LazyImage({ src = '', alt = '', fallback, className = '' }) {
	const [loaded, setLoaded] = React.useState(false);

	return (
		<>
			<img
				className={className}
				src={src}
				alt={alt}
				style={!loaded ? { display: 'none' } : {}}
				onLoad={() => setLoaded(true)}
				onError={() => setLoaded(false)}
			/>
			{!loaded && fallback}
		</>
	);
}

export default LazyImage;
