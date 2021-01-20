import styled from '@emotion/styled';
import { createVariableGetter } from '../../../lib/styleUtil';

const getVar = createVariableGetter('tooltip');

export const Wrapper = styled.div`
	display: inline-block;
	position: relative;
	cursor: default;
`;

export const Tip = styled.span`
	padding: 0.6rem 1rem 0.6rem 0;
	border-radius: ${getVar('borderRadius', '.25rem')};
	background-color: ${getVar('backgroundColor', '#000000')};
	color: ${getVar('textColor', '#FFFFFF')};
	font-size: 1.5rem;
	font-weight: bold;
	position: absolute;
	top: 50%;
	left: 100%;
	transform: translate(${({ isOpen }) => (isOpen ? '1.5rem' : '2rem')}, -50%);
	pointer-events: none;
	opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
	transition: opacity 200ms ease-out, transform 200ms ease-in-out;
	white-space: nowrap;

	&::before {
		content: '';
		width: 1rem;
		height: 1rem;
		background-color: ${getVar('backgroundColor', '#000000')};
		display: inline-block;
		transform: translate(-0.5rem, 0) rotate(-45deg);
	}
`;
