import Image from 'next/image';
const Card = ({ source, name, position }) => {
	return (
		<div className='member__card'>
			<Image width={400} height={560} src={source} alt={name} />
			<div className='member__card__info'>
				<h3>{name}</h3>
				<h4>{position}</h4>
			</div>
		</div>
	);
};

export default Card;
