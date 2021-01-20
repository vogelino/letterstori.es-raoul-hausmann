import styled from '@emotion/styled';
import { createVariableGetter } from '../../../lib/styleUtil';
import ToggleButton from '../ToggleButton';

const getVar = createVariableGetter('documentInfo');

export const DocumentInformationsWrapper = styled.div`
	background: ${getVar('background', '#333333')};
	color: ${getVar('color', '#FFFFFF')};
	box-shadow: ${getVar('tooltipShadow', '1px 1px 6px rgba(0,0,0,.25)')};
	border-radius: 0.5rem;
	margin-bottom: 4rem;
	overflow: hidden;
`;

export const MetaList = styled.dl`
	padding: 2rem;
	margin: 0;
`;

export const MetaType = styled.dt`
	font-size: 1.25rem;
	margin-bottom: 0.75rem;
	text-transform: uppercase;
	letter-spacing: 0.1rem;
	color: #828282;
`;

export const MetaValue = styled.dd`
	margin-left: 0;
	margin-bottom: 1rem;

	&:last-child {
		margin-bottom: 0;
	}
`;

export const StoryTitle = styled(MetaValue)`
	font-weight: bold;
	font-size: 2rem;
`;

export const StoryContainerShadow = styled.span`
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	height: 8rem;
	box-shadow: inset 0 4rem 8rem -3rem ${({ color }) => color};
	opacity: 0.4;
	pointer-events: none;
	transition: box-shadow 200ms ease-in-out;
`;

export const ArrowButton = styled(ToggleButton)`
	position: absolute;
	right: 0;
	top: 0;
	opacity: 0.4;
	pointer-events: none;
`;

export const StoryContainer = styled.dl`
	padding: 2rem;
	background: ${({ color }) => color};
	margin: 0;
	position: relative;
	cursor: pointer;

	&:hover ${StoryContainerShadow} {
		height: 16rem;
		box-shadow: inset 0 8rem 16rem -6rem ${({ color }) => color};
	}

	&:hover ${ArrowButton} {
		opacity: 1;
	}

	& ${MetaType} {
		color: ${getVar('tooltipTextColor', '#ffffff')};
	}
`;

export const StoryMetadata = styled.div`
	background: ${getVar('storyMetadataBackground', '#4F4F4F')};
	color: ${getVar('storyMetadataColor', '#FFFFFF')};
	overflow: hidden;
	padding: ${({ isOpen }) => (isOpen ? '2rem' : '0 2rem')};
	max-height: ${({ isOpen }) => (isOpen ? '1000px' : '0')};
	transition: max-height 200ms ease-in-out, padding 200ms ease-in-out;
`;

export const StorySummary = styled.h4`
	font-weight: ${getVar('storySummaryFontWeight', 'bold')};
	margin: 1rem 0 2rem;
`;

export const StoryDescription = styled.p`
	margin: 0 0 1rem;
`;
