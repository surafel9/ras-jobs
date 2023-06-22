import React from 'react';
import '../style/loading.scss';

const Loading = () => {
	return (
		<div className='c-loading'>
			<div className='c-loader'>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Loading;
