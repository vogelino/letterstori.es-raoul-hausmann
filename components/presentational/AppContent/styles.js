import styled from '@emotion/styled';

export const Wrapper = styled.article`
	position: relative;
	overflow: ${({ documentIsOpen }) => (documentIsOpen ? 'auto' : 'hidden')};
	height: ${({ documentIsOpen }) =>
		documentIsOpen ? 'auto' : 'calc(100vh - 6rem)'};
`;

export const TimelineContainer = styled.section`
	height: ${({ documentIsOpen }) => (documentIsOpen ? '33rem' : '100vh')};
	overflow: ${({ documentIsOpen }) => (documentIsOpen ? 'hidden' : 'auto')};
	transition: height 300ms 100ms ease-in-out;
	z-index: 1;
`;

export const DocumentDrawerContainer = styled.section`
	width: 100%;
	top: translateY(${({ documentIsOpen }) => (documentIsOpen ? '0' : '100vh')});
	transition: transform 200ms 200ms ease-in-out;
	z-index: 2;
`;
