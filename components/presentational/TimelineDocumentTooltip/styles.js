import styled from '@emotion/styled';

export const TimelineDocumentTooltipWrapper = styled.div`
	top: 167px;
	position: absolute;
	width: 34rem;
	transition: opacity 200ms 100ms cubic-bezier(0.05, 0.35, 0.04, 0.95),
		transform 200ms 100ms cubic-bezier(0.05, 0.35, 0.04, 0.95);
	pointer-events: none;
	z-index: 10;
	overflow: hidden;
	transform-origin: 0 0;
	opacity: 0;
	transform: rotate(4deg);
`;

export const Title = styled.h1`
	margin: 0 0 2rem;
`;
