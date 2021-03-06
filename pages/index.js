import Head from 'next/head';
import SectionOne from '../components/sections/SectionOne';
import SectionTwo from '../components/sections/section-two/SectionTwo';
import SectionThree from '../components/sections/section-three/SectionThree';
import SectionFour from '../components/sections/section-four/SectionFour';
import SectionFive from '../components/sections/section-five/SectionFive';
import SectionSix from '../components/sections/section-6/SectionSix';

export default function Home() {
	return (
		<div className='homepage'>
			<Head>
				<title>Attorneys at law</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<SectionOne />
			<SectionFour />
			<SectionThree />
			<SectionTwo />
			<SectionFive />
			<SectionSix />
		</div>
	);
}
