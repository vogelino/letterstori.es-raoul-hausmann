import styled from '@emotion/styled';
import { ActorWrapper } from '../Actor/styles';

export const DocumentStoryCorrespondentsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export const CorrespondentWrapper = styled.div`
	flex: 1 0 50%;
	padding: 1rem 1rem 0 0;
	display: flex;

	${ActorWrapper} {
		flex: 0 0 6rem;
	}
`;

export const CorrespondentName = styled.div`
	font-weight: bold;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const CorrespondentLifespan = styled.div``;

export const CorrespondentInfos = styled.div`
	flex: 0 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-left: 1rem;
`;
