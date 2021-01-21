import styled from '@emotion/styled';

export const Wrapper = styled.section`
	width: calc(
		100% -
			${({ documentInformationsSidebarIsOpen }) =>
				documentInformationsSidebarIsOpen ? 50 : 6}rem
	);
	position: relative;
	float: right;
	transition: width 0.5s ease-out;
`;

export const Content = styled.section`
	position: relative;
	width: 100%;
	min-height: 100vh;
	padding: 2rem;
	color: white; /* provisory */
	z-index: 1;
`;
