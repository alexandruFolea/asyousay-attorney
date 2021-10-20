import Link from 'next/link';
const Navigation = () => {
	return (
		<nav>
			<div className='navbar'>
				<div className='navbar__logo'>
					<Link href='/'>
						<a>ASYOUSAY LAW FIRM</a>
					</Link>
				</div>
				<ul className='navbar__list'>
					<li>
						<Link href='/'>
							<a>Home</a>
						</Link>
					</li>
					<li>
						<Link href='/practice'>
							<a>Practice Areas</a>
						</Link>
					</li>
					<li>
						<Link href='/our-attorneys'>
							<a>Our attorneys</a>
						</Link>
					</li>
					<li>
						<Link href='/blog'>
							<a>Blog</a>
						</Link>
					</li>
					<li>
						<Link href='/contact'>
							<a>Contact Us</a>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navigation;
