import { useState } from 'react';
import BusinessAgreements from '../../components/practice-components/BusinessAgreements';
import Commercial from '../../components/practice-components/Commercial';
import Corporate from '../../components/practice-components/Corporate';
import Employment from '../../components/practice-components/Employment';
import Family from '../../components/practice-components/Family';
import IntelectualProperty from '../../components/practice-components/IntelectualProperty';
import International from '../../components/practice-components/International';
import Litigation from '../../components/practice-components/Litigation';
import ArrowDown from '../../components/ArrowDown';
const Practice = () => {
	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (index) => {
		setToggleState(index);
		console.log(index);
	};

	return (
		<>
			<div className='practice__title'>
				<h1>Our team expertise includes </h1>
			</div>
			<div className='practice__page'>
				<div className='practice__tabs'>
					<button
						className={
							toggleState === 1 ? 'practice__tab active' : 'practice__tab'
						}
						onClick={() => toggleTab(1)}
					>
						commercial
					</button>
					<button
						className={
							toggleState === 2 ? 'practice__tab active' : 'practice__tab'
						}
						onClick={() => toggleTab(2)}
					>
						corporate
					</button>
					<button
						className={
							toggleState === 3 ? 'practice__tab active' : 'practice__tab'
						}
						onClick={() => toggleTab(3)}
					>
						business agreements
					</button>
					<button
						className={
							toggleState === 4 ? 'practice__tab active' : 'practice__tab'
						}
						onClick={() => toggleTab(4)}
					>
						family
					</button>
					<button
						className={
							toggleState === 5 ? 'practice__tab active' : 'practice__tab'
						}
						onClick={() => toggleTab(5)}
					>
						intelectual property
					</button>
					<button
						className={
							toggleState === 6 ? 'practice__tab active' : 'practice__tab'
						}
						onClick={() => toggleTab(6)}
					>
						employment
					</button>
					<button
						className={
							toggleState === 7 ? 'practice__tab active' : 'practice__tab'
						}
						onClick={() => toggleTab(7)}
					>
						FSLA litigation
					</button>
					<button
						className={
							toggleState === 8 ? 'practice__tab active' : 'practice__tab'
						}
						onClick={() => toggleTab(8)}
					>
						international
					</button>
				</div>

				<div className='content-tabs'>
					<div
						className={toggleState === 1 ? 'content active-content' : 'content'}
					>
						<Commercial />
					</div>
					<div
						className={toggleState === 2 ? 'content active-content' : 'content'}
					>
						<Corporate />
					</div>
					<div
						className={toggleState === 3 ? 'content active-content' : 'content'}
					>
						<BusinessAgreements />
					</div>
					<div
						className={toggleState === 4 ? 'content active-content' : 'content'}
					>
						<Family />
					</div>
					<div
						className={toggleState === 5 ? 'content active-content' : 'content'}
					>
						<IntelectualProperty />
					</div>
					<div
						className={toggleState === 6 ? 'content active-content' : 'content'}
					>
						<Employment />
					</div>
					<div
						className={toggleState === 7 ? 'content active-content' : 'content'}
					>
						<Litigation />
					</div>
					<div
						className={toggleState === 8 ? 'content active-content' : 'content'}
					>
						<International />
					</div>
				</div>
			</div>
		</>
	);
};

export default Practice;
