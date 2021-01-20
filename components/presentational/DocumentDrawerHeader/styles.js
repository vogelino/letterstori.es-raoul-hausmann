import styled from '@emotion/styled';
import { createVariableGetter } from '../../../lib/styleUtil';
import SwitchWithState from '../../presentational/Switch';
import OriginalToggleButton from '../../presentational/ToggleButton';

const getVar = createVariableGetter('documentDetail.header');

export const WrapperComponent = styled.div`
	width: 100%;
	height: 6rem;
	background: ${getVar('backgroundColor', '#F2F2F2')};
	color: ${getVar('textColor', '#333333')};
	position: relative;
	box-shadow: 0 10px 40px -5px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
	float: right;
	background: none;
	border: none;
	width: 6rem;
	height: 6rem;
	padding: 0;

	line-height: 0;
	font-size: 3rem;
	text-align: center;
	color: inherit;
	user-select: none;
	outline: none;
	opacity: 1;
	transition: opacity 200ms ease-in-out;
	cursor: pointer;

	&:hover {
		opacity: 0.6;
	}
`;

export const CloseButton = styled(Button)`
	margin-left: 2rem;
	font-size: 4rem;
`;

export const SidebarToggler = styled(OriginalToggleButton)``;

export const AnnotationToggler = styled(OriginalToggleButton)`
	float: right;
	margin-right: 3rem;
`;

export const Switch = styled(SwitchWithState)`
	float: right;
`;
