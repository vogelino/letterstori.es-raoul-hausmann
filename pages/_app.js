import React from 'react';
import Head from 'next/head';
import globalStyles from '../styles/globalStyles';
import '../styles/fonts.css';

const MyApp = ({ Component, pageProps }) => (
	<>
		<Head>
			<title>Letterstori.es – Raoul Hausmann</title>
			<link
				rel="icon"
				type="image/svg+xml"
				href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%23ed008c%22></rect><path fill=%22%23ffffff%22 d=%22M22.03 71.45L11.66 71.45L11.66 28.55L29.38 28.55Q34.20 28.55 37.71 30.27Q41.22 32.00 43.13 35.22Q45.03 38.43 45.03 42.83L45.03 42.83Q45.03 47.30 43.09 50.41Q41.14 53.52 37.55 55.14Q33.97 56.77 29.07 56.77L29.07 56.77L17.86 56.77L17.86 48.60L27.14 48.60Q29.49 48.60 31.07 47.98Q32.65 47.36 33.47 46.09Q34.29 44.82 34.29 42.83L34.29 42.83Q34.29 40.84 33.47 39.53Q32.65 38.23 31.06 37.57Q29.47 36.91 27.14 36.91L27.14 36.91L22.03 36.91L22.03 71.45ZM24.71 51.84L35.82 51.84L46.50 71.45L35.19 71.45L24.71 51.84ZM61.08 71.45L50.71 71.45L50.71 28.55L61.08 28.55L61.08 45.77L77.99 45.77L77.99 28.55L88.34 28.55L88.34 71.45L77.99 71.45L77.99 54.21L61.08 54.21L61.08 71.45Z%22></path></svg>"
			/>
			<meta
				property="og:description"
				content="Die Briefkorrespondenz des Dadaisten Raoul Hausmann als interaktive Visualisierung."
			/>
			<meta property="og:title" content="Letterstori.es – Raoul Hausmann" />
			<meta property="og:url" content="https://hausmann.letterstori.es" />
			<meta property="og:image" content="/images/og-hausmann.png" />
		</Head>
		{globalStyles}
		<Component {...pageProps} />
	</>
);

export default MyApp;
