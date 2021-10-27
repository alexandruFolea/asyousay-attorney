import {
	FaFacebookSquare,
	FaInstagramSquare,
	FaTwitterSquare,
} from 'react-icons/fa';
// import { AiFillTwitterSquare } from 'react-icons/ai';
const FooterLeft = () => {
	return (
		<div className='footer__left'>
			<div className='left__logo'>
				<h2>ASYOUSAY LAW GROUP</h2>
			</div>
			<div className='left__info'>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
					aperiam ipsa modi! Sit, quod exercitationem eius sequi error, sunt
					architecto necessitatibus voluptatem itaque repellat laboriosam quia
					odio aperiam nihil ipsam!
				</p>
			</div>
			<div className='left__social'>
				<FaFacebookSquare />
				<FaInstagramSquare />
				<FaTwitterSquare />
			</div>
		</div>
	);
};

export default FooterLeft;
