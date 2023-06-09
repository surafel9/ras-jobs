import React from 'react';

export default function Logo() {
	return (
		<div className='logo'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='100'
				height='100'
				viewBox='0 0 300 300'
			>
				<circle cx='55' cy='160' r='34' fill='blue'>
					<animate
						attributeName='r'
						dur='2s'
						values='34; 30; 34'
						repeatCount='indefinite'
					/>
				</circle>
				<circle cx='89' cy='89' r='21' fill='green'>
					<animate
						attributeName='r'
						dur='2s'
						values='21; 18; 21'
						repeatCount='indefinite'
					/>
				</circle>
				<circle cx='123' cy='55' r='13' fill='gold'>
					<animate
						attributeName='r'
						dur='2s'
						values='13; 10; 13'
						repeatCount='indefinite'
					/>
				</circle>
				<circle cx='157' cy='34' r='8' fill='red'>
					<animate
						attributeName='r'
						dur='2s'
						values='8; 6; 8'
						repeatCount='indefinite'
					/>
				</circle>
				<circle cx='191' cy='21' r='5' fill='orange'>
					<animate
						attributeName='r'
						dur='2s'
						values='5; 3; 5'
						repeatCount='indefinite'
					/>
				</circle>
				<text
					x='150'
					y='200'
					textAnchor='middle'
					fill='gold'
					fontSize='60'
					fontFamily='Arial, sans-serif'
				>
					Ras Jobs
				</text>
			</svg>
		</div>
	);
}
