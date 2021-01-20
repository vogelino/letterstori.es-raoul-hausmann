import styled from '@emotion/styled';

export const CorrespondentsWrapper = styled.div`
	padding: 2rem;
	position: relative;
	display: flex;

	&:after {
		content: '';
		clear: both;
		display: table;
	}
`;

const ActorColumns = styled.div`
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: calc((100% - 4rem) / 2);
`;

export const ActorLine = styled.div`
	padding: 0.25rem 0;
	margin: 0;
	list-style: none;
	flex: 0 0 auto;
	width: 100%;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
`;

export const SendersColumn = styled(ActorColumns)`
	text-align: right;
	padding-right: 2rem;
`;

export const ArrowsColumn = styled.div`
	width: 4rem;
	display: flex;
	color: ${({ storyColor }) => storyColor || 'white'};
`;

export const RecipientsColumn = styled(ActorColumns)`
	padding-left: 2rem;
`;

export const ArrowsSvg = styled.svg`
	width: 100%;
	height: 100%;
`;

export const CorrespondentPath = styled.path`
	stroke-linecap: round;
	stroke: ${({ storyColor }) => storyColor};
	fill: none;
`;

export const CorrespondentLine = styled.line`
	stroke-linecap: round;
	stroke: ${({ storyColor }) => storyColor};
	fill: none;
`;

export const Separator = styled.hr`
	border: none;
	position: absolute;
	bottom: 0;
	left: 2rem;
	width: calc(100% - 4rem);
	height: 1px;
	margin: 0;
	background: #4f4f4f;
`;
