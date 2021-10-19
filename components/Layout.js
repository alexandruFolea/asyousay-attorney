import Footer from './Footer';
import Navigation from './Navigation';

const Layout = ({ children }) => {
	return (
		<div className='layout'>
			<Navigation />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
