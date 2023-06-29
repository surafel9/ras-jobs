import React from 'react';
import '../style/footer.scss';
export default function Footer() {
	return (
		<footer className='footer'>
			<div className='footer__container'>
				<div className='footer__social-media'>
					<h3>Follow Us</h3>
					<ul>
						<li>
							<a
								href='https://www.facebook.com/rasjobs'
								target='_blank'
								rel='noopener noreferrer'
							>
								Facebook
							</a>
						</li>
						<li>
							<a
								href='https://www.twitter.com/rasjobs'
								target='_blank'
								rel='noopener noreferrer'
							>
								Twitter
							</a>
						</li>
						<li>
							<a
								href='https://www.linkedin.com/company/rasjobs'
								target='_blank'
								rel='noopener noreferrer'
							>
								LinkedIn
							</a>
						</li>
						<li>
							<a
								href='https://www.instagram.com/rasjobs'
								target='_blank'
								rel='noopener noreferrer'
							>
								Instagram
							</a>
						</li>
					</ul>
				</div>
				<div className='footer__site-map'>
					<h3>Site Map</h3>
					<ul>
						<li>
							<a href='/jobs'>Browse Jobs</a>
						</li>
						<li>
							<a href='/employers'>For Employers</a>
						</li>
						<li>
							<a href='/about'>About Us</a>
						</li>
						<li>
							<a href='/contact'>Contact Us</a>
						</li>
					</ul>
				</div>
			</div>
			<div className='footer__bottom'>
				<p>
					&copy; from 1970 - {new Date().getFullYear()} RAS-Jobs. All
					rights reserved.
				</p>
			</div>
		</footer>
	);
}
