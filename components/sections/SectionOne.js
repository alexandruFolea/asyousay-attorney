import Link from 'next/link';
import ArrowDown from '../ArrowDown';
const SectionOne = () => {
	return (
		<div className='section__one' id='section__one'>
			<div className='section__one__text'>
				<h1>
					Results <br /> <span>that speak</span> <br />
					<span>for themselves</span>
				</h1>
			</div>

			<ArrowDown />
		</div>
	);
};

export default SectionOne;
