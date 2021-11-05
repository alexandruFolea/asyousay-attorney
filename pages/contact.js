import { BsHeadset } from 'react-icons/bs';
import { CgPushChevronRight } from 'react-icons/cg';

const contact = () => {
	const handleClick = (e) => {
		e.preventDefault();
	};
	return (
		<div className='contact__page'>
			<div className='contact__banner'>
				<div className='contact__banner__text'>
					<h1>Contact Us</h1>
				</div>
			</div>
			<div className='contact__form'>
				<div className='contact__left'>
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
					<div className='contact__info'>
						<span>
							<address>
								697 NoWhere Blvd. <br />
								Suite #101 <br />
								Phone: 987-555-6655
							</address>
						</span>
					</div>
				</div>
				<div className='contact__right'>
					<h2>Frequently asked questions</h2>
					<div className='testimony__info'>
						<details>
							<summary>
								<CgPushChevronRight />
								Is there more to life than what you are experiencing?
							</summary>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
							numquam perspiciatis accusamus ut eos cumque hic sequi adipisci?
							Deserunt, iusto.
						</details>
						<details>
							<summary>
								<CgPushChevronRight />
								Is it a great time to be alive?
							</summary>
							<span>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
								numquam perspiciatis accusamus ut eos cumque hic sequi adipisci?
								Deserunt, iusto.
							</span>
						</details>
						<details>
							<summary>
								<CgPushChevronRight />
								When was the last time you spent time with yourself and be ok
								with it?
							</summary>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
							numquam perspiciatis accusamus ut eos cumque hic sequi adipisci?
							Deserunt, iusto.
						</details>
						<details>
							<summary>
								<CgPushChevronRight />
								What other legal services does the firm provide
							</summary>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
							numquam perspiciatis accusamus ut eos cumque hic sequi adipisci?
							Deserunt, iusto.
						</details>
						<details>
							<summary>
								<CgPushChevronRight />
								Are there any legal advice blogs you can familiriaze yourself
								with?
							</summary>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
							numquam perspiciatis accusamus ut eos cumque hic sequi adipisci?
							Deserunt, iusto.
						</details>
					</div>
				</div>
			</div>
		</div>
	);
};

export default contact;
