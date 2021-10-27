import Navigation from './Navigation';
import Footer from './footer/Footer';
const Layout = ({ children }) => {
	return (
		<>
			<Navigation />
			<main className='layout'>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
