import TestimonialCard from './TestimonialCard';
import ArrowDown from '../../ArrowDown';

const SectionFive = () => {
	return (
		<div className='section__five' id='section__five'>
			<div className='section__five__wrapper'>
				<div className='section__five__top'>
					<h1>Don`t just take our word for it</h1>
					<p>
						We understand you need assurance that we know what we’re doing. Take
						a look at some of the client testimonials, and be rest assured that
						you are in the right hands.
					</p>
				</div>
				<div className='testimonial__grid__container'>
					<TestimonialCard />
					<TestimonialCard />
				</div>
			</div>
			<ArrowDown />
		</div>
	);
};

export default SectionFive;
