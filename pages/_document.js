import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				{/* Preload critical fonts */}
				<link
					rel="preload"
					href="/fonts/inter-ui/Inter-UI-Regular.woff2"
					as="font"
					type="font/woff2"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/fonts/inter-ui/Inter-UI-Bold.woff2"
					as="font"
					type="font/woff2"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/fonts/merriweather/merriweather-regular-webfont.woff2"
					as="font"
					type="font/woff2"
					crossOrigin="anonymous"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
