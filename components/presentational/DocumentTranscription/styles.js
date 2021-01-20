import styled from '@emotion/styled';
import { createVariableGetter } from '../../../lib/styleUtil';

const getVar = createVariableGetter('documentDetail');

export const TranscriptionContainer = styled.section`
	width: 100%;
	padding: 5rem;
	margin: 0 auto 6rem auto;
	max-width: 1024px;
	background: ${getVar('transcriptionBackground', '#ffffff')};
	color: ${getVar('transcriptionColor', '#000000')};
	border-radius: 3px;

	&,
	p,
	span {
		font-family: ${getVar('transcriptionFontFamily', 'Merriweather, serif')};
		font-size: ${getVar('transcriptionFontSize', '2rem')};
		line-height: ${getVar('transcriptionFontSize', '3rem')};
	}
`;

export const TranscriptionParagraph = styled.p`
	margin-bottom: 2rem;

	&:after {
		content: '¶';
		opacity: 0.3;
		font-size: 70%;
		margin-left: 1em;
	}
`;

export const TranscriptionAnnotation = styled.span`
	background-color: ${({ storyColor, isHovered }) =>
		isHovered ? storyColor : 'rgba(0, 0, 0, .15)'};
	color: ${({ isHovered }) => (isHovered ? 'white' : '#000000')};
	transition: background-color 100ms ease-out, color 100ms ease-out;
	cursor: pointer;
	border-radius: 2px;
	padding: 1px;
`;
