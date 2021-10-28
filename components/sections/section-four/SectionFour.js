import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Card from './Card';
import ArrowDown from '../../ArrowDown';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const SectionFour = () => {
	return (
		<div className='section__four'>
			<div className='section__four__title'>
				<h1>Meet the team</h1>
			</div>

			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				effect={'fade'}
				pagination={{
					clickable: true,
				}}
				navigation={true}
			>
				<SwiperSlide>
					<Card
						source='/2.jpeg'
						name='Alicia Preston'
						position='Directing Manager'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Card
						source='/6.jpeg'
						name='Kiran Marmitton'
						position='Directing Manager'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Card
						source='/4.jpeg'
						name='Olivia Benchmark'
						position='Head Attoryney'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Card
						source='/5.jpeg'
						name='Jessie Belluci'
						position='Client Associate'
					/>
				</SwiperSlide>
			</Swiper>
			<ArrowDown />
		</div>
	);
};

export default SectionFour;
