import styled from '@emotion/styled';

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;

	> svg line {
		stroke: grey;
	}
`;

export const NavigatorWrapper = styled.div`
	position: absolute;
	z-index: 3;
	width: 100%;
	top: 0;
	left: 0;
`;

export const NavigatorGradient = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 8rem;
	pointer-events: none;
	background: linear-gradient(
		to bottom,
		rgba(255, 255, 255, 1) 10%,
		rgba(255, 255, 255, 0.6) 50%,
		rgba(255, 255, 255, 0) 100%
	);
`;

export const TimelineContent = styled.div`
	position: absolute;
	top: 5rem;
	width: 100%;
	height: calc(100% - 5rem);
	overflow-x: scroll;
	overflow-y: hidden;

	display: flex;
	flex-direction: column;
`;

const TimelineContentElement = styled.section`
	width: 100%;
`;

export const TimelineContextWrapper = styled(TimelineContentElement)`
	position: absolute;
	top: 0;
	background: linear-gradient(
		to bottom,
		rgba(255, 255, 255, 0.8) 50%,
		rgba(255, 255, 255, 0) 100%
	);
	height: 10rem;
	padding-top: 1rem;
	z-index: 1;
`;

export const ThumbnailsWrapper = styled(TimelineContentElement)`
	height: 20rem;
`;

export const ConnectionsWrapper = styled(TimelineContentElement)`
	flex-grow: 1;
	display: flex;
`;

export const ActorsWrapper = styled(TimelineContentElement)`
	position: fixed;
	left: 0;
	top: 100vh;
	width: 22rem;
	z-index: 3;
	pointer-events: none;
	float: left;
	padding: 4rem 0 4rem 4rem;
	height: 100vw;
	transform-origin: 0 0;
	transform: rotate(-90deg);
`;
