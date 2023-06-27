import React from 'react';
import '../style/notification.scss';
export default function Notification({
	message,
	isVisible,
	closeNotification,
}) {
	return (
		<div className={`notification ${isVisible ? 'visible' : 'hidden'}`}>
			<p>{message}</p>
			<button onClick={closeNotification}>Close</button>
		</div>
	);
}
