import React from 'react';
import { AppStateProvider } from '../lib/AppStateContext';
import GlobalStyles from '../styles/globalStyles';

function MyApp({ Component, pageProps }) {
	return (
		<AppStateProvider>
			{GlobalStyles}
			<Component {...pageProps} />
		</AppStateProvider>
	);
}

export default MyApp;
