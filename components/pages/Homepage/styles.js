import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';

export const GlobalStyles = (
	<Global
		styles={css`
			html,
			body {
				overflow-y: auto;
			}
		`}
	/>
);

export const Container = styled.div`
	font-size: 18px;
	line-height: 24px;
	margin: 0 auto;
	padding: 100px 24px;
	max-width: 700px;
	position: relative;

	a {
		color: black;
		transition: box-shadow 200ms ease-out;
		text-decoration: none;
		box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.2);

		&:hover {
			box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.6);
		}

		&:active {
			opacity: 0.3;
		}
	}

	ul,
	li {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	li {
		margin-bottom: 4px;
	}

	h2 {
		margin: 48px 0 24px;
	}

	.screenshot {
		width: calc(100% + 100px);
		height: auto;
		border: 1px solid rgba(0, 0, 0, 0.1);
		box-shadow: 0 8px 64px -16px rgba(0, 0, 0, 0.2);
		border-radius: 3px;
		margin: 16px 0 32px -50px;
	}

	.main-aside,
	.logos-aside {
		flex-direction: column;
		justify-content: space-between;
	}

	.titles,
	footer {
		flex: 0 0;
	}

	.introduction-text {
		font-size: 32px;
		line-height: 40px;
		font-weight: 300;
		margin-bottom: 72px;
	}

	.introduction-text strong {
		font-weight: bold;
	}

	.logos-aside {
		justify-content: flex-end;
	}

	.main-title {
		font-size: 40px;
	}

	.logos-list {
		margin: 64px 0;
	}

	.logos-list a {
		box-shadow: none;
	}

	.logos-list-item {
		margin-right: 64px;
		margin-top: 16px;
		display: inline-block;
	}

	.logos-list-item:last-child {
		margin-right: 0;
	}

	.logos-list-item img {
		height: 48px;
		max-width: 100%;
	}

	.prototypes-links {
		display: flex;
	}

	.prototypes-link-column {
		flex: 0 0 50%;
		padding: 0 16px;
	}

	.prototypes-link-column:first-child {
		padding-left: 0;
	}

	.prototypes-link-column:last-child {
		padding-right: 0;
	}

	@media screen and (max-width: 877px) {
		body {
			flex-wrap: wrap;
			padding: 40px 32px;
		}

		.main-aside,
		.logos-aside {
			flex: 1 1;
		}

		.screenshot {
			width: 100%;
			margin-left: 0;
		}

		.prototypes-links {
			flex-wrap: wrap;
		}

		.prototypes-link-column {
			flex: 1 0 100%;
			padding: 0;
		}
	}
`;
