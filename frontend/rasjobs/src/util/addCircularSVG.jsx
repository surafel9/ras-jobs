import React from 'react';

export default function AddCircularSVG(prop) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='21'
			height='21'
			fill='#0049b7'
			className={prop.className}
			viewBox='0 0 16 16'
			role='button'
			onClick={prop.handler}
		>
			<path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z' />
		</svg>
	);
}
