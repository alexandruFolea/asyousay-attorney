import Link from 'next/link';
import React from 'react';
import GridItem from './GridItem';
import { BsChevronDoubleDown } from 'react-icons/bs';
import ArrowDown from '../../ArrowDown';

const SectionTwo = () => {
	return (
		<div className='section__two' id='section__two'>
			<div className='section__two__text'>
				<h2>Legal are of expertise</h2>
			</div>
			<div className='section__two__grid__container'>
				<Link href='/practice'>
					<a>
						<GridItem practice='Commercial' />
					</a>
				</Link>
				<Link href='/practice'>
					<a>
						<GridItem practice='Corporate' />
					</a>
				</Link>
				<Link href='/practice'>
					<a>
						<GridItem practice='Business Agreements' />
					</a>
				</Link>
				<Link href='/practice'>
					<a>
						<GridItem practice='Family' />
					</a>
				</Link>
				<Link href='/practice'>
					<a>
						<GridItem practice='Intelectual Property' />
					</a>
				</Link>
				<Link href='/practice'>
					<a>
						<GridItem practice='Emplyment' />
					</a>
				</Link>
				<Link href='/practice'>
					<a>
						<GridItem practice='FSLA Litigation' />
					</a>
				</Link>
				<Link href='/practice'>
					<a>
						<GridItem practice='International' />
					</a>
				</Link>
			</div>
			<ArrowDown />
		</div>
	);
};

export default SectionTwo;
