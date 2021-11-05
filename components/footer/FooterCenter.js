import { HiOutlinePaperClip } from 'react-icons/hi';
import Link from 'next/link';
const FooterCenter = () => {
	return (
		<div className='footer__center'>
			<h3>
				<HiOutlinePaperClip />
				SITEMAP
			</h3>
			<p>Quickly navigate our site through our sitemap below!</p>
			<ul className='footer__list'>
				<li>
					<Link href='/'>
						<a>home</a>
					</Link>
				</li>

				<li>
					<Link href='/attorneys'>
						<a>Meet the Team</a>
					</Link>
				</li>
				<li>
					<Link href='/attorneys'>
						<a>Services</a>
					</Link>
				</li>
				<li>
					<Link href='/contact'>
						<a>contact</a>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default FooterCenter;
