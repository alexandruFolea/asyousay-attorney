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
					<div className='section__two__grid__item'>
						<Link href='/practice'>
							<a>
								<h1>commercial</h1>
							</a>
						</Link>
					</div>
					<div className='section__two__grid__item'>
						<Link href='/practice'>
							<a>
								<h1>corporate</h1>
							</a>
						</Link>
					</div>
					<div className='section__two__grid__item'>
						<Link href='/practice'>
							<a>
								<h1>matrimonial</h1>
							</a>
						</Link>
					</div>
					<div className='section__two__grid__item'>
						<Link href='/practice'>
							<a>
								<h1>international</h1>
							</a>
						</Link>
					</div>
					<div className='section__two__grid__item '>
						<Link href='/practice'>
							<a>
								<h1>litigation</h1>
							</a>
						</Link>
					</div>
					<div className='section__two__grid__item '>
						<Link href='/practice'>
							<a>
								<h1>and more...</h1>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionTwo;
