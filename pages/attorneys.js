import AttorneyInfo from '../components/AttorneyInfo';
import { useState } from 'react';
import { GiAchievement } from 'react-icons/gi';

const Attorneys = () => {
	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (index) => {
		setToggleState(index);
		console.log(index);
	};
	return (
		<div className='attorneys__page'>
			<div className='attorneys__page__wrapper'>
				<div className='page__title'>
					<h1>Team that is focused to find a solution to your legal needs</h1>
					<p>
						Our team has a combined experience of over 95 years in high level
						law activities
					</p>
					<div className='page__title__achievements'>
						<h2>Team Achievments</h2>
						<ul className='achievements__list'>
							<li>
								<GiAchievement />
								Top Law Firm in NY Metropolitan Area 2015-216 / 2019-2020
							</li>
							<li>
								<GiAchievement />
								Best Customer Relations Award 2020
							</li>
							<li>
								<GiAchievement />
								Regional Litigation Departments of the Year Award
							</li>
							<li>
								<GiAchievement />
								Legal Services Innovation Award
							</li>
							<li>
								<GiAchievement />
								Young Lawyer of the Year Award
							</li>
						</ul>
					</div>
				</div>

				<h1 className='attorney__info__intro'>Meet the brains</h1>
				<div className='attorney__info__container'>
					<div className='attorney__tabs'>
						<div
							className={
								toggleState === 1 ? 'attorney__tab active' : 'attorney__tab'
							}
							onClick={() => toggleTab(1)}
						>
							<h2>Alicia Preston</h2>
						</div>
						<div
							className={
								toggleState === 2 ? 'attorney__tab active' : 'attorney__tab'
							}
							onClick={() => toggleTab(2)}
						>
							<h2> Kiran Marmitton</h2>{' '}
						</div>
						<div
							className={
								toggleState === 3 ? 'attorney__tab active' : 'attorney__tab'
							}
							onClick={() => toggleTab(3)}
						>
							<h2>Olivia Benchmark</h2>
						</div>
						<div
							className={
								toggleState === 4 ? 'attorney__tab active' : 'attorney__tab'
							}
							onClick={() => toggleTab(4)}
						>
							<h2>Jessie Belluci</h2>
						</div>
					</div>

					<div className='attorney__desc__container'>
						<div
							className={
								toggleState === 1 ? 'attorney active-attorney' : 'attorney'
							}
						>
							<AttorneyInfo
								image='/2.jpeg'
								name='Alicia Preston'
								title='Executive Director 🧑‍⚖️'
								education='Boston College'
								experience='has been in the field for 12 years'
								moto='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore maiores debitis itaque quibusdam voluptates exercitationem fugiat omnis vero deserunt error adipisci rem porro consequuntur quod reprehenderit id eligendi atque, sit sint quae nesciunt! Obcaecati nemo consectetur hic quisquam provident? Ex.'
							/>
						</div>
						<div
							className={
								toggleState === 2 ? 'attorney active-attorney' : 'attorney'
							}
						>
							<AttorneyInfo
								image='/6.jpeg'
								name='Kiran Marmitton'
								title='Head Attorney  😎'
								education='University of South Carolina'
								experience='has been in the field for the past 14 years'
								moto='Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati officia quas dolorem aliquam modi, error necessitatibus a, consequuntur sapiente amet commodi porro illo corrupti tenetur aperiam doloribus quasi qui dolores.'
							/>
						</div>
						<div
							className={
								toggleState === 3 ? 'attorney active-attorney' : 'attorney'
							}
						>
							<AttorneyInfo
								image='/4.jpeg'
								name='Olivia Benchmark'
								title='Head of Humar Resources'
								education='University of Manchester'
								experience='has been in the field for 8 years'
								moto='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore maiores debitis itaque quibusdam voluptates exercitationem fugiat omnis vero deserunt error adipisci rem porro consequuntur quod reprehenderit id eligendi atque, sit sint quae nesciunt! Obcaecati nemo consectetur hic quisquam provident? Ex.'
							/>
						</div>
						<div
							className={
								toggleState === 4 ? 'attorney active-attorney' : 'attorney'
							}
						>
							<AttorneyInfo
								image='/5.jpeg'
								name='Jessie Belluci'
								title='Client Representative'
								education='University of Illinois @Chicago'
								experience='has been in the field for 13 years'
								moto='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore maiores debitis itaque quibusdam voluptates exercitationem fugiat omnis vero deserunt error adipisci rem porro consequuntur quod reprehenderit id eligendi atque, sit sint quae nesciunt! Obcaecati nemo consectetur hic quisquam provident? Ex.'
							/>
						</div>
					</div>
				</div>

				<div className='attorneys__page__more__info'>
					<div className='attorneys__page__more__info__top'>
						<h2>Rest assured, you are in good hands!</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Voluptatem odit corporis, ut voluptatum commodi impedit eius at
							nihil tempora distinctio consequuntur officia possimus. Debitis
							quisquam iste fugiat quam temporibus! Animi?
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Attorneys;
