import styled from '@emotion/styled';

export const ActorRows = styled.ul`
	position: relative;
	height: 100%;
	display: inline-block;
	list-style: none;
	margin: 0;
	padding: 0;
	pointer-events: all;
	width: 100%;
`;

export const ActorRow = styled.li`
	width: 100%;
	margin: 0;
	height: 20px;
	position: relative;
`;

export const ActorRowText = styled.span`
	padding: 2px 1rem 2px 0;
	background-color: white;
	position: absolute;
	top: 50%;
	left: 0;
	transform: translateY(-50%);
	max-width: 18rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;
