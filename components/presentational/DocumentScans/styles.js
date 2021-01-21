import styled from '@emotion/styled';
import { createVariableGetter } from '../../../lib/styleUtil';

const getVar = createVariableGetter('documentDetail');

export const ScansContainer = styled.div`
	margin: 0 auto 6rem auto;
	overflow: hidden;
	background: white;
	border-radius: 3px;
	max-width: 1024px;
	position: relative;
`;

export const StoryPolygonContainer = styled.svg`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
`;

export const StoryPolygon = styled.polygon`
	stroke: ${({ storyColor }) => storyColor};
	fill: ${({ theme, isHovered, storyColor }) =>
		isHovered ? storyColor : getVar('annotationColor', '#000000')({ theme })};
	fill-opacity: ${getVar('annotationOpacity', '.2')};
	stroke-opacity: ${getVar('annotationOpacity', '1')};
	stroke-width: ${({ isHovered }) => (isHovered ? '2px' : '0')};
`;
