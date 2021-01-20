import styled from '@emotion/styled';
import { createVariableGetter } from '../../../lib/styleUtil';

const getVar = createVariableGetter('header');

export const AppHeaderWrapper = styled.header`
	height: 6rem;
	background: ${getVar('backgroundColor', '#333333')};
	color: ${getVar('textColor', '#ffffff')};
	border-bottom: 1px solid ${getVar('borderColor', '#333333')};
	display: flex;
	align-items: stretch;
	padding: 0 2rem 0 0;
`;

export const Title = styled.span`
	flex-grow: 1;
	flex-shrink: 1;
	padding: 0 2rem;
	font-size: 2.5rem;
	line-height: 6rem;
`;

export const Bold = styled.strong`
	font-weight: bold;
`;

export const Link = styled.a`
	flex-grow: 0;
	flex-shrink: 0;
	padding: 0 2rem 0 0;
	line-height: 6rem;
	color: ${getVar('textColor', '#FF0000')};
	transition: opacity 200ms ease-out;
	cursor: ${(props) => (props.isActive ? 'default' : 'pointer')};
	opacity: ${(props) => (props.isActive ? '.6' : '1')};

	&:hover {
		opacity: 0.6;
	}
`;
