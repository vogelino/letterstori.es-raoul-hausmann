import React from 'react';
import { AppStateProvider } from '../lib/AppStateContext';
import '../styles/fonts.css';

function MyApp({ Component, pageProps }) {
	return (
		<AppStateProvider>
			<Component {...pageProps} />
		</AppStateProvider>
	);
}

export default MyApp;
