import styled from '@emotion/styled';

export const CanvasTimelineWrapper = styled.div`
	position: relative;
	flex-grow: 1;
`;

export const CanvasTimeline = styled.canvas`
	position: absolute;
	top: 0;
	left: 0;
	transform-origin: 0 0;
`;

export const HitGraphCanvas = styled(CanvasTimeline)`
	display: none;
	pointer-events: none;
`;
