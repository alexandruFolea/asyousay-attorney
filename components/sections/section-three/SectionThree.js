import { RiBuilding2Fill } from 'react-icons/ri';
import Link from 'next/link';
import ArrowDown from '../../ArrowDown';
import {
	GiMinotaur,
	GiBinoculars,
	GiNorthStarShuriken,
	GiDominoTiles,
} from 'react-icons/gi';
const SectionThree = () => {
	return (
		<div className='section__three' id='section__three'>
			<div className='section__three__wrapper'>
				<div className='section__three__text'>
					<div className='top__text'>
						<h1>*********</h1>
						<RiBuilding2Fill />
						<h1>*********</h1>
					</div>
					<div className='bottom__text'>
						<h1>
							<span>ASYOUSAY ATTORNEYS</span> HIGHLIGHTS
						</h1>
					</div>
				</div>
				<div className='section__three__grid__container'>
					<div className='item'>
						<div className='item__title'>
							<GiMinotaur />
							<h2>Innovative Law</h2>
						</div>
						<div className='item__desc'>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Aspernatur modi nam magni quasi exercitationem possimus tempora
								aliquid in optio officia temporibus pariatur earum, quos
								sapiente similique odio vitae quo nulla dicta. Animi cumque ab
								reprehenderit.
							</p>
						</div>
					</div>
					<div className='item'>
						<div className='item__title'>
							<GiBinoculars />
							<h2>Always here to help</h2>
						</div>
						<div className='item__desc'>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Aspernatur modi nam magni quasi exercitationem possimus tempora
								aliquid in optio officia temporibus pariatur earum, quos
								sapiente similique odio vitae quo nulla dicta. Animi cumque ab
								reprehenderit. Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Quas vitae unde autem tenetur consectetur
								doloremque, consequatur quam laboriosam sequi modi quidem
								laborum provident, facere voluptatum quia nobis, id veritatis
								officiis.
							</p>
						</div>
					</div>
					<div className='item'>
						<div className='item__title'>
							<GiNorthStarShuriken />
							<h2>Ground breaking results</h2>
						</div>
						<div className='item__desc'>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Aspernatur modi nam magni quasi exercitationem possimus tempora
								aliquid in optio officia temporibus pariatur earum, quos
								sapiente similique odio vitae quo nulla dicta. Animi cumque ab
								reprehenderit. Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Culpa, quam.
							</p>
						</div>
					</div>
					<div className='item'>
						<div className='item__title'>
							<GiDominoTiles />
							<h2>Consisten feedback and availability</h2>
						</div>
						<div className='item__desc'>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Aspernatur modi nam magni quasi exercitationem possimus tempora
								aliquid in optio officia temporibus pariatur earum, quos
								sapiente similique odio vitae quo nulla dicta. Animi cumque ab
								reprehenderit.
							</p>
						</div>
					</div>
				</div>
			</div>
			<Link href='#section__four'>
				<a>
					<ArrowDown />
				</a>
			</Link>
		</div>
	);
};

export default SectionThree;
