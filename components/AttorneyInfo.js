const AttorneyInfo = ({ name, title, education, experience, moto }) => {
	return (
		<div className='attorney__card'>
			<div className='attorney__card__left'>
				<h1>
					Name: <span>{name}</span>
				</h1>
				<h3>
					Position: <span>{title}</span>
				</h3>
				<h3>
					Education: <span>{education}</span>
				</h3>
			</div>
			<div className='attorney__card__right'>
				<p>
					Experience: <span>{experience}</span>
				</p>
				<p>
					Life moto: <span>{moto}</span>
				</p>
				{/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati officia quas dolorem aliquam modi, error necessitatibus a, consequuntur sapiente amet commodi porro illo corrupti tenetur aperiam doloribus quasi qui dolores.</p> */}
			</div>
		</div>
	);
};

export default AttorneyInfo;
