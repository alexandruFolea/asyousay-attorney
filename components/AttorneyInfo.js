import Image from 'next/image';
const AttorneyInfo = ({ name, title, education, experience, moto, image }) => {
	return (
		<div className='attorney__card'>
			<div className='attorney__card__left'>
				<Image src={image} height={600} width={400} alt='attorney image' />
			</div>
			<div className='attorney__card__right'>
				<h1>
					Name: <span>{name}</span>
				</h1>
				<h3>
					Position: <span>{title}</span>
				</h3>
				<h3>
					Education: <span>{education}</span>
				</h3>
				<p>
					Experience: <span>{experience}</span>
				</p>
				<p>
					Life moto: <span>{moto}</span>
				</p>
			</div>
		</div>
	);
};

export default AttorneyInfo;
