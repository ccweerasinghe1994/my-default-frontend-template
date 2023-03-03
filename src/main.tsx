import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './app/store';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home/Home.page';
import NotFound from './pages/NotFound/NotFound.page';
import AboutPage from './pages/About/About.page';
import LoginPage from './pages/Login/Login.page';

export const CustomRouter = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/home',
				element: <HomePage />,
			},
			{
				path: '/about',
				element: <AboutPage />,
			},
			{
				path: '/login',
				element: <LoginPage />,
			},
		],
	},

	{
		path: '/*',
		element: <NotFound />,
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Provider store={store}>
		<React.StrictMode>
			<RouterProvider router={CustomRouter} />
		</React.StrictMode>
	</Provider>
);
