import { BsHeadset } from 'react-icons/bs';

const FooterRight = () => {
	const handleClick = (e) => {
		e.preventDefault();
	};
	return (
		<div className='footer__right'>
			<h3>
				<BsHeadset />
				Got a question?
			</h3>
			<form>
				<input type='text' placeholder='Your E-mail Address*' />
				<textarea placeholder='Enter Message Here'></textarea>
				<div>
					<button type='submit' onClick={handleClick}>
						CONTACT US NOW
					</button>
				</div>
			</form>
		</div>
	);
};

export default FooterRight;
