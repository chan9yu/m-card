import { Outlet } from 'react-router-dom';
import ScrollToTop from '../common/ScrollToTop';

export default function AppLayout() {
	return (
		<>
			<ScrollToTop />
			<Outlet />
		</>
	);
}
