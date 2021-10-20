const Card = ({ name, role, children }) => {
	return (
		<div className='card'>
			{children}
			<div className='card__text'>
				<h1>{name}</h1>
				<h2>{role}</h2>
			</div>
		</div>
	);
};

export default Card;
