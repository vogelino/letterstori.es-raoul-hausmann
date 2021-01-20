import styled from '@emotion/styled';
import { createVariableGetter } from '../../../lib/styleUtil';

const getVar = createVariableGetter('switch');

export const WrapperComponent = styled.div`
	display: inline-flex;
	flex-wrap: nowrap;
	align-items: center;
	font-weight: normal;
	height: 6rem; /*48px*/
	color: ${getVar('textColor', '#333333')};
	padding: 1rem;
`;

export const OptionLeft = styled.span`
	transition: opacity 0.2s ease-out;
	opacity: ${({ isLeft }) => (isLeft ? 1 : '.6')};
`;

export const OptionRight = styled.span`
	transition: opacity 0.2s ease-out;
	opacity: ${({ isLeft }) => (isLeft ? '.6' : 1)};
`;

export const BubbleWrapper = styled.div`
	position: relative;
	border-radius: 3rem;
	border: 1px solid ${getVar('borderColor', '#333333')};
	cursor: pointer;
	display: inline-block;
	height: 2.75rem;
	margin: 0 1rem;
	padding: 1.5rem;
	width: 6rem; /*48px*/
`;

export const Bubble = styled.span`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;

	&::before {
		transition: 0.2s ease-in-out;
		content: '';
		position: absolute;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 2.5rem;
		top: 0.25rem;
		left: 0.25rem;
		background: ${getVar('bubbleColor', '#333333')};
		transform: translateX(${({ isLeft }) => (isLeft ? '0' : '2.75rem')});
	}
`;
