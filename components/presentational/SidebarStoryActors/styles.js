import styled from '@emotion/styled';
import OriginalActor from '../Actor';

export const WrapperComponent = styled.ul`
	margin: 0;
	padding: 0 0 2rem 0;
	width: 100%;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: flex-end;
`;

export const ActorWrapper = styled.li`
	display: inline-flex;
	width: 100%;
	height: 6rem;
	min-height: 6rem;
	justify-content: flex-end;
	align-items: center;
	padding: 1rem 0;
	transform: translateX(2.5rem);
`;

export const Actor = styled(OriginalActor)`
	height: 5rem;
	width: 5rem;
`;

export const ActorName = styled.span`
	display: inline-block;
	padding: 0 2rem;
`;
