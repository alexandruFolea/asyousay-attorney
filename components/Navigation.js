import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Navigation = () => {
	const [open, setOpen] = useState(false);
	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<nav className='navbar'>
			<div className='navbar__logo'>
				<Link href='/' onClick={handleClick}>
					<a>ASYOUSAY ATTORNEYS</a>
				</Link>
			</div>
			<div className='hamburger' onClick={handleClick}>
				{open ? <FaTimes /> : <FaBars />}
			</div>
			<ul className={open ? 'navbar__list active' : 'navbar__list'}>
				<li onClick={handleClick}>
					<Link href='/'>
						<a>home</a>
					</Link>
				</li>

				<li onClick={handleClick}>
					<Link href='/attorneys'>
						<a>our attorneys</a>
					</Link>
				</li>
				<li onClick={handleClick}>
					<Link href='/contact'>
						<a>contact</a>
					</Link>
				</li>
				<li onClick={handleClick}>
					<Link href='/blog'>
						<a>blog</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
