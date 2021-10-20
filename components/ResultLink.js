import Link from 'next/link';
const ResultLink = ({ children }) => {
	return (
		<div className='grid__item'>
			<div className='grid__item__image'></div>
			<div className='grid__item__title'>{children}</div>
		</div>
	);
};

export default ResultLink;
