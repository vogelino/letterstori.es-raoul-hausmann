import styled from '@emotion/styled';
import { createVariableGetter } from '../../../lib/styleUtil';

const getVar = createVariableGetter('documentDetail');
const defaultGradient =
	'linear-gradient(to bottom, rgba(0,0,0,.1) 0, rgba(0,0,0,0) 100%)';

export const Wrapper = styled.div`
	position: absolute;
	height: calc(100vh - 6rem);
	color: ${getVar('textColor', '#333333')};
	background: ${getVar('storyNotesBackground', '#FFFFFF')};
	width: ${({ isOpen }) => (isOpen ? '50rem' : '0')};
	transition: 0.5s ease-in-out;
`;

export const Header = styled.header`
	width: 100%;
	height: 6rem;
	/* padding: 0 2rem; */
	position: absolute;
	background: ${getVar('headerGradient', defaultGradient)};
	z-index: 2;
	pointer-events: none;
`;

export const Content = styled.section`
	position: relative;
	width: 100%;
	height: 100%;
	overflow-x: hidden;
	overflow-y: auto;
	padding: 2rem;
	z-index: 1;
`;
