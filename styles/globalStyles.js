import { Global, css } from '@emotion/react';

export default (
	<Global
		styles={css`
			* {
				font-family: 'Inter UI', 'Source Sans', 'Open Sans', arial, helvetica,
					sans-serif;
				-webkit-font-smoothing: antialiased;
				box-sizing: border-box;
			}

			html,
			body {
				max-width: 100%;
				overflow: hidden;
			}

			html {
				font-size: 8px;
			}

			body {
				margin: 0;
				font-size: 1.5rem;
			}

			a {
				text-decoration: none;
			}
		`}
	/>
);
