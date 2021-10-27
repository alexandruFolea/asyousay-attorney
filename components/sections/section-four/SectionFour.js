import Card from './Card';
import Link from 'next/link';
import ArrowDown from '../../ArrowDown';

const SectionFour = () => {
	return (
		<div className='section__four' id='section__four'>
			<div className='section__four__text'>
				<h1>Meet our Team</h1>
			</div>
			<div className='section__four__grid__container'>
				<Card
					source='/2.jpeg'
					name='Alicia Preston'
					position='Directing Manager'
				/>
				<Card
					source='/6.jpeg'
					name='Kiran Benchmark'
					position='Head Attoryney'
				/>
				<Card
					source='/4.jpeg'
					name='Jessie Belluci'
					position='Client Associate'
				/>
				<Card source='/5.jpeg' name='Chris Vault' position='Client Associate' />
			</div>
			<div className='contact__link'>
				<Link href='/attorneys'>
					<a>more info</a>
				</Link>
			</div>
			<Link href='#section__five'>
				<a>
					<ArrowDown />
				</a>
			</Link>
		</div>
	);
};

export default SectionFour;
