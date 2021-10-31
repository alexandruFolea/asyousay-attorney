import Link from 'next/link';

import ArrowDown from '../../ArrowDown';

const SectionTwo = () => {
	return (
		<div className='section__two'>
			<div className='section__two__wrapper'>
				<div className='section__two__title'>
					<h1>Quick preview at the services we provide</h1>
				</div>
				<div className='section__two__grid__container'>
					<Link href='/practice'>
						<a className='section__two__grid__item'>commercial</a>
					</Link>
					<Link href='/practice'>
						<a className='section__two__grid__item'>corporate</a>
					</Link>
					<Link href='/practice'>
						<a className='section__two__grid__item'>matrimonial</a>
					</Link>
					<Link href='/practice'>
						<a className='section__two__grid__item'>international</a>
					</Link>
					<Link href='/practice'>
						<a className='section__two__grid__item'>litigation</a>
					</Link>

					<Link href='/practice'>
						<a className='section__two__grid__item'>and more...</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SectionTwo;
