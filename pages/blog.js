import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const blog = () => {
	return (
		<div className='blog__page'>
			<h1>blog</h1>
		</div>
	);
};

export default blog;
