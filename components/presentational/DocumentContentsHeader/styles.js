import styled from '@emotion/styled';
import { createVariableGetter } from '../../../lib/styleUtil';

const getVar = createVariableGetter('documentDetail');
const defaultGradient =
	'linear-gradient(to bottom, rgba(0,0,0,.1) 0, rgba(0,0,0,0) 100%)';

export const Header = styled.header`
	width: 100%;
	height: 6rem;
	padding: 0 2rem;
	position: absolute;
	background: ${getVar('headerGradient', defaultGradient)};
	color: ${getVar('headerTextColor', '#333333')};
	z-index: 2;
`;
