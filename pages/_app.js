import React from 'react';
import globalStyles from '../styles/globalStyles';

const MyApp = ({ Component, pageProps }) => (
	<>
		{globalStyles}
		<Component {...pageProps} />
	</>
);

export default MyApp;
