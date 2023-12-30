import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'swiper/swiper.min.css';

import App from './App';
import ModalProvider from './contexts/ModalContext';

const queryClient = new QueryClient();
const rootElement = document.getElementById('root');

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<QueryClientProvider client={queryClient}>
				<ModalProvider>
					<App />
				</ModalProvider>
			</QueryClientProvider>
		</React.StrictMode>
	);
} else {
	throw new Error('root element not found');
}
