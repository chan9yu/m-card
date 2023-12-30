import { RouterProvider, createBrowserRouter, type RouteObject } from 'react-router-dom';

import { ROUTER_PATH } from '../constants';
import HomePage from '../page/HomePage';
import TestPage from '../page/TestPage';

const appObject: RouteObject[] = [
	{
		path: ROUTER_PATH.HOME,
		element: <HomePage />
	},
	{
		path: ROUTER_PATH.TEST,
		element: <TestPage />
	}
];

const routeObject: RouteObject[] = [
	{
		path: ROUTER_PATH.HOME,
		// element: <></>,
		children: appObject,
		errorElement: <div>error page.</div>
	}
];

const RootRouter = () => <RouterProvider router={createBrowserRouter(routeObject)} />;

export default RootRouter;
