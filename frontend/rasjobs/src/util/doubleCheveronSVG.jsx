export function DoubleChevronDownSvg({ toggle }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='20'
			height='20'
			fill='#c75c00'
			className='bi bi-chevron-double-down'
			viewBox='0 0 16 16'
			role='button'
			onClick={toggle}
		>
			<path d='M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z' />
			<path d='M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z' />
		</svg>
	);
}
