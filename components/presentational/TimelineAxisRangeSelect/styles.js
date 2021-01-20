import styled from '@emotion/styled';
import { createVariableGetter } from '../../../lib/styleUtil';

const getVar = createVariableGetter('timelineRangeSelect');

const frameBorderWidth = 1;
const handleWidth = 5;

export const Frame = styled.div`
	--rangeSelectBorderColor: ${getVar('borderColor', '#7a7a7a')};
	--rangeSelectHandleColor: ${getVar('handleColor', '#4f4f4f')};

	position: absolute;
	height: 80%;
	top: 0;

	background-color: transparent;
	border-color: var(--rangeSelectBorderColor);
	border-width: ${frameBorderWidth}px;
	border-style: solid;
	cursor: move;
`;

const Handle = styled.div`
	position: absolute;
	width: ${handleWidth}px;
	height: 70%;

	top: 0;
	bottom: 0;
	margin-top: auto;
	margin-bottom: auto;

	background-color: var(--rangeSelectHandleColor);
	box-shadow: inset 0 0 0 1.5px var(--rangeSelectBorderColor);
	cursor: col-resize;
	z-index: 2;
	border-radius: 4px;
	border: 5px transparent;
`;

export const LeftHandle = styled(Handle)`
	left: 0;
	transform: translateX(-50%);
`;

export const RightHandle = styled(Handle)`
	right: 0;
	transform: translateX(50%);
`;
