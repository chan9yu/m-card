import { Outlet } from 'react-router-dom';

import Navbar from '../common/Navbar';
import ScrollToTop from '../common/ScrollToTop';

export default function AppLayout() {
	return (
		<>
			<Navbar />
			<ScrollToTop />
			<Outlet />
		</>
	);
}
