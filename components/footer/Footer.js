import FooterCenter from './FooterCenter';
import FooterLeft from './FooterLeft';
import FooterRight from './FooterRight';

const Footer = () => {
	return (
		<footer className='footer'>
			<FooterLeft />
			<FooterCenter />
			<FooterRight />
		</footer>
	);
};

export default Footer;
