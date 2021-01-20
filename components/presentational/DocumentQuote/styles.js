import styled from '@emotion/styled';
import { createVariableGetter } from '../../../lib/styleUtil';

const getVar = createVariableGetter('documentDetail');

export const DocumentQuoteContainer = styled.div`
	padding: 2rem;
	/* margin-bottom: 2rem; */
	font-family: ${getVar('annotationFontFamily', 'Merriweather')};
	font-size: ${getVar('annotationFontSize', '2rem')};
	font-style: ${getVar('annotationFontStyle', 'italic')};
	border-radius: ${getVar('annotationBorderRadius', '.5rem')};
	background: ${getVar('annotationBackgroundColor', '#FFFFFF')};
	box-shadow: ${getVar('annotationBoxShadow', '1px 1px 8px 2px #F2F2F2')};
	transition: border 200ms ease-in-out;
	border: solid 2px
		${({ isHovered, storyColor }) => (isHovered ? storyColor : 'transparent')};
	line-height: 3rem;
	margin-bottom: 2rem;
	box-sizing: border-box;
	position: relative;
	cursor: pointer;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: ${({ storyColor }) => storyColor};
		opacity: ${({ isHovered }) => (isHovered ? '.1' : '0')};
		pointer-events: none;
	}
`;
