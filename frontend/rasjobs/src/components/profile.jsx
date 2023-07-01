import React from 'react';

export default function Profile() {
	return (
		<div className='user-demo'>
			<div className='contact'>
				<p>Name</p>
				<p>Title</p>
				<p>Contact info</p>
			</div>
			<div className='stats'>
				{' '}
				<p>Profile bar</p>
				<p>Applied jobs stats</p>
				<p>
					Recommended jobs count: <a href='/'>JOBS</a>
				</p>
			</div>
		</div>
	);
}
