import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import ModalContextProvider from './contexts/ModalContext';

const rootElement = document.getElementById('root');

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<ModalContextProvider>
				<App />
			</ModalContextProvider>
		</React.StrictMode>
	);
} else {
	throw new Error('root element not found');
}
