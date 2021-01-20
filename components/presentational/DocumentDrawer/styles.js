import styled from '@emotion/styled';
import { createVariableGetter } from '../../../lib/styleUtil';

const getVar = createVariableGetter('documentDetail');

export const DocumentDrawerContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	background: ${getVar('backgroundColor', '#333333')};
`;
